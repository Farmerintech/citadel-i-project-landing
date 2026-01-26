import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, email, name } = await req.json();

    if (!amount || !email || !name) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const amountKobo = Math.round(amount); // ensure integer kobo
    const callbackUrl = process.env.NEXT_PUBLIC_BASE_URL
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/payment-callback`
      : "http://localhost:3000/payment-callback";

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, amount: amountKobo, callback_url: callbackUrl, metadata: { name } }),
    });

    const data = await response.json();
    console.log("Paystack response:", data);

    if (!data.status) {
      return NextResponse.json({ success: false, message: data.message || "Payment init failed" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      reference: data.data.reference,
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Payment initialization failed" }, { status: 500 });
  }

  
}


