import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, email, name, reference } = await req.json();

    // If no reference, initialize transaction
    if (!reference) {
      if (!amount || !email || !name) {
        return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
      }

      const amountKobo = Math.round(amount * 100);
      const callbackUrl = process.env.NEXT_PUBLIC_BASE_URL
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/paystack`
        : "http://localhost:3000/api/paystack";

      const initResponse = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, amount: amountKobo, callback_url: callbackUrl, metadata: { name } }),
      });

      const initData = await initResponse.json();

      if (!initData.status) {
        return NextResponse.json({ success: false, message: initData.message || "Payment init failed" }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        reference: initData.data.reference,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      });
    }

    // If reference exists, verify transaction
    const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.status) {
      return NextResponse.json({ success: false, message: verifyData.message || "Payment verification failed" }, { status: 400 });
    }

    // Payment is successful
    return NextResponse.json({ success: true, data: verifyData.data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Payment failed" }, { status: 500 });
  }
}
