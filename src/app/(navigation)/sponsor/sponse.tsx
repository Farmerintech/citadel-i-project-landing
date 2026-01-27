"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Sponsor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [paystackReady, setPaystackReady] = useState(false);

  // Load Paystack script
  useEffect(() => {
    if ((window as any).PaystackPop) setPaystackReady(true);
  }, []);

  const handlePayment = async () => {
    // Validate inputs
    if (!name.trim() || !email.trim() || !phone.trim() || amount <= 0) {
      setMessage("Please fill all required fields with valid values.");
      return;
    }

    if (!paystackReady) {
      setMessage("Payment system is still loading. Please wait...");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // 1️⃣ Initialize payment
      const res = await fetch("/api/paystack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount * 100, // convert to kobo
          email,
          name,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Payment initialization failed");
      }

      const { reference, publicKey } = data;
      const PaystackPop = (window as any).PaystackPop;

      // 2️⃣ Setup Paystack payment
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
              // Verify payment
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ reference: response.reference }),
              });

              const verifyData = await verifyRes.json();
              if (!verifyData.success)
                throw new Error("Payment verification failed");

              // Create booking
              const bookingRes = await fetch(
                "https://api.citadel-i.com.ng/api/v1/bookings/create_booking",
                {
                  method: "POST",
                  credentials: "include",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name,
                    email,
                    phone,
                    amountPaid: amount,
                    currency: "NGN",
                    paymentId: response.reference,
                    paymentStatus: "successful",
                  }),
                }
              );

              const bookingResult = await bookingRes.json();
              if (!bookingResult.success) throw new Error("Booking failed");

              alert("Booking successful! Payment confirmed.");
              setName("");
              setEmail("");
              setPhone("");
              setAmount(0);
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

      <h2 className="text-xl font-semibold">Donate to sponsor students</h2>
      <div className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <Label>Name of Sponsor</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label>Email Address</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <Label>Phone Number</Label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234 801 234 5678"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col gap-1">
          <Label>Amount willing to sponsor</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="0"
            min={0}
          />
        </div>

        {message && <p className="text-red-600">{message}</p>}

        <Button
          className="bg-[#FF5900] text-white mt-2"
          onClick={handlePayment}
          disabled={loading || !paystackReady}
        >
          {loading ? "Processing..." : "Make Payment"}
        </Button>
      </div>
    </aside>
  );
}
