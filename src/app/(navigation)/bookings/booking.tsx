"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/app/store/user";

const CLASSES = ["KS1", "KS2", "KS3", "ISCE/GCE"];
const YEARS = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"];

export default function TutorBookingForm() {
  const user = useAuthStore((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sectionsPerWeek, setSectionsPerWeek] = useState(1);
  const [amount, setAmount] = useState(0);
  const [inUSD, setInUSD] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [payPerSession, setPayPerSession] = useState(0); // Naira
  const [usdRate, setUsdRate] = useState(0); // USD
  const [paystackReady, setPaystackReady] = useState(false);

  // Prefill user info once
  useEffect(() => {
    if (user) {
      setName(`${user.firstName ?? ""} ${user.lastName ?? ""}`);
      setEmail(user.email ?? "");
    }
  }, [user]);

  // Load Paystack script
  useEffect(() => {
    if ((window as any).PaystackPop) setPaystackReady(true);
  }, []);

  // Fetch pricing
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch("https://api.citadel-i.com.ng/api/v1/admin/get_pricing", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok && data?.data) {
          setPayPerSession(Number(data.data.price_per_season_in_naira));
          setUsdRate(Number(data.data.price_per_season_in_dollar));
        }
      } catch (err) {
        console.error("Error fetching price:", err);
      }
    };
    fetchPricing();
  }, []);

  // Reset year if class changes
  useEffect(() => {
    if (selectedClass === "ISCE/GCE") setSelectedYear("");
    else if (!YEARS.includes(selectedYear)) setSelectedYear("");
  }, [selectedClass]);

  // Calculate amounts
  useEffect(() => {
    if (sectionsPerWeek > 0 && selectedClass) {
      setAmount(payPerSession * sectionsPerWeek * 4); // monthly Naira
      setInUSD(usdRate * sectionsPerWeek * 4); // monthly USD
    } else {
      setAmount(0);
      setInUSD(0);
    }
  }, [sectionsPerWeek, selectedClass, payPerSession, usdRate]);

  // -------------------- HANDLE PAYMENT --------------------
  const handlePayment = async () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !selectedClass || (selectedClass !== "ISCE/GCE" && !selectedYear)) {
      setMessage("Please fill all required fields");
      return;
    }

    if (!paystackReady) {
      setMessage("Payment system is still loading. Please wait...");
      return;
    }

    if (amount <= 0) {
      setMessage("Invalid amount to pay");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Initialize & verify payment from the same endpoint
      const res = await fetch("/api/paystack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Payment initialization failed");

      const { reference, publicKey } = data;
      const PaystackPop = (window as any).PaystackPop;

      const handler = PaystackPop.setup({
        key: publicKey,
        email,
        amount: amount * 100,
        currency: "NGN",
        ref: reference,

        onClose: function () {
          setMessage("Payment was not completed.");
          setLoading(false);
        },

        callback: function (response: any) {
          (async () => {
            try {
              // Verify payment directly through the same endpoint
              const verifyRes = await fetch("/api/paystack", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ reference: response.reference }),
              });

              const verifyData = await verifyRes.json();
              if (!verifyData.success) throw new Error("Payment verification failed");

              // Create booking
              const bookingRes = await fetch("https://api.citadel-i.com.ng/api/v1/bookings/create_booking", {
                method: "POST",
                credentials: "include",
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
              if (!bookingResult.success) throw new Error("Booking failed");

              alert("Booking successful! Payment confirmed.");

              // Reset form
              setName("");
              setEmail("");
              setPhone("");
              setSelectedClass("");
              setSelectedYear("");
              setSectionsPerWeek(1);
              setAmount(0);
              setInUSD(0);
            } catch (err: any) {
              console.error(err);
              setMessage(err.message || "Error verifying payment. Try again.");
            } finally {
              setLoading(false);
            }
          })();
        },
      });

      handler.openIframe();
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || "An error occurred. Please try again.");
      setLoading(false);
    }
  };

  // -------------------- JSX --------------------
  return (
    <aside className="w-full md:w-[520px] bg-white text-black p-6 rounded-lg flex flex-col gap-6 shadow-md">
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
        onLoad={() => setPaystackReady(true)}
      />

      <h2 className="text-xl font-semibold">Tutor Booking</h2>
      <div className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <Label>First and Last Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label>Email Address</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <Label>Phone Number</Label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234 801 234 5678" />
        </div>

        {/* Class */}
        <div className="flex flex-col gap-1">
          <Label>Class Booking For</Label>
          <Select onValueChange={setSelectedClass} value={selectedClass}>
            <SelectTrigger><SelectValue placeholder="Select Class" /></SelectTrigger>
            <SelectContent>
              {CLASSES.map((cls) => <SelectItem key={cls} value={cls}>{cls}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Year */}
        {selectedClass && selectedClass !== "ISCE/GCE" && (
          <div className="flex flex-col gap-1">
            <Label>Select Year</Label>
            <Select onValueChange={setSelectedYear} value={selectedYear}>
              <SelectTrigger><SelectValue placeholder="Select Year" /></SelectTrigger>
              <SelectContent>
                {YEARS.map((yr) => <SelectItem key={yr} value={yr}>{yr}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Sections */}
        {selectedClass && (
          <div className="flex flex-col gap-1">
            <Label>Number of Sections per Week</Label>
            <Input type="number" min={1} max={7} value={sectionsPerWeek} onChange={(e) => setSectionsPerWeek(Number(e.target.value))} />
          </div>
        )}

        {/* Amount */}
        {amount > 0 && (
          <div className="p-4 bg-gray-100 rounded-md">
            <p className="font-medium">Amount to Pay:</p>
            <p>₦{amount.toLocaleString()} / ${inUSD.toLocaleString()}</p>
            <p className="text-sm text-gray-600">*Monthly Payment</p>
          </div>
        )}

        {message && <p className="text-red-600">{message}</p>}

        <Button className="bg-[#FF5900] text-white mt-2" onClick={handlePayment} disabled={loading || !paystackReady}>
          {loading ? "Processing..." : "Make Payment"}
        </Button>
      </div>
    </aside>
  );
}
