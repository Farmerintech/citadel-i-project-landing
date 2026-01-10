"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CLASSES = ["KS1", "KS2", "KS3", "ISCE/GCE"];
const YEARS = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"];
const PAY_PER_SESSION = 1500; // Naira
const USD_RATE = 2000; // 1 USD = 460 Naira

export default function TutorBookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sectionsPerWeek, setSectionsPerWeek] = useState(1);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedClass) {
      if (selectedClass === "ISCE/GCE") setSelectedYear("");
      else if (!YEARS.includes(selectedYear)) setSelectedYear("");
    }
  }, [selectedClass]);

  useEffect(() => {
    if (sectionsPerWeek && selectedClass) {
      setAmount(PAY_PER_SESSION * sectionsPerWeek * 4);
    } else {
      setAmount(0);
    }
  }, [sectionsPerWeek, selectedClass]);

const handlePayment = async () => {
  if (!name || !email || !phone || !selectedClass || (selectedClass !== "ISCE/GCE" && !selectedYear)) {
    setMessage("Please fill all required fields");
    return;
  }

  setLoading(true);
  setMessage("");

  try {
    // STEP 1: Initialize payment via backend
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amount * 100, // Paystack expects kobo
        email,
        name,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      setMessage("Payment initialization failed. Please try again.");
      setLoading(false);
      return;
    }

    const { reference, publicKey } = data; // reference from backend & your Paystack public key

    // STEP 2: Launch Paystack inline payment
    const handler = (window as any).PaystackPop?.setup({
      key: publicKey, // your Paystack public key
      email,
      amount: amount * 100, // in kobo
      currency: "NGN",
      ref: reference,
      onClose: () => {
        setMessage("Payment was not completed.");
        setLoading(false);
      },
      callback: async (response: { reference: string }) => {
        // STEP 3: Verify payment on backend
        try {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: response.reference }),
          });

          const verifyData = await verifyRes.json();

          if (!verifyData.success) {
            setMessage("Payment was not successful. Please try again.");
            setLoading(false);
            return;
          }

          // STEP 4: Submit booking to backend
          const bookingRes = await fetch("/api/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              phone,
              selectedClass,
              selectedYear,
              sectionsPerWeek,
              amountPaid: amount,
              currency: "NGN",
              paymentId: response.reference,
              paymentStatus: "successful",
            }),
          });

          const bookingResult = await bookingRes.json();

          if (bookingResult.success) {
            setMessage("Booking successful! Payment confirmed.");
            // Reset form
            setName("");
            setEmail("");
            setPhone("");
            setSelectedClass("");
            setSelectedYear("");
            setSectionsPerWeek(1);
            setAmount(0);
          } else {
            setMessage("Booking failed, please contact support.");
          }
        } catch (err) {
          console.error(err);
          setMessage("Error verifying payment. Try again.");
        } finally {
          setLoading(false);
        }
      },
    });

    handler.openIframe();
  } catch (err) {
    console.error(err);
    setMessage("An error occurred. Please try again.");
    setLoading(false);
  }
};


  return (
    <aside className="w-full md:w-[520px] bg-white text-black p-6 rounded-lg flex flex-col gap-6 shadow-md">
      <h2 className="text-xl font-semibold">Tutor Booking</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label>First and Last Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
        </div>

        <div className="flex flex-col gap-1">
          <Label>Email Address</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
        </div>

        <div className="flex flex-col gap-1">
          <Label>Phone Number</Label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234 801 234 5678" />
        </div>

        <div className="flex flex-col gap-1">
          <Label>Class Booking For</Label>
          <Select onValueChange={setSelectedClass}>
            <SelectTrigger>
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              {CLASSES.map((cls) => (
                <SelectItem key={cls} value={cls}>{cls}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedClass && selectedClass !== "ISCE/GCE" && (
          <div className="flex flex-col gap-1">
            <Label>Select Year</Label>
            <Select onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {YEARS.map((yr) => (
                  <SelectItem key={yr} value={yr}>{yr}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {selectedClass && (
          <div className="flex flex-col gap-1">
            <Label>Number of Sections per Week</Label>
            <Input
              type="number"
              min={1}
              max={7}
              value={sectionsPerWeek}
              onChange={(e) => setSectionsPerWeek(Number(e.target.value))}
            />
          </div>
        )}

        {amount > 0 && (
          <div className="p-4 bg-gray-100 rounded-md">
            <p className="font-medium">Amount to Pay:</p>
            <p>₦{amount.toLocaleString()} / ${ (amount / USD_RATE).toFixed(2) }</p>
            <p className="text-sm text-gray-600">*Monthly Payment</p>
          </div>
        )}

        {message && <p className="text-red-600">{message}</p>}

        <Button className="bg-[#FF5900] text-white mt-2" onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Make Payment"}
        </Button>
      </div>
    </aside>
  );
}
