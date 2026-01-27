import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { reference } = body;
    if (!reference) {
      return NextResponse.json({ success: false, message: "Reference is required" }, { status: 400 });
    }

    if (!process.env.PAYSTACK_SECRET_KEY) {
      console.error("PAYSTACK_SECRET_KEY is missing!");
      return NextResponse.json({ success: false, message: "Server misconfiguration" }, { status: 500 });
    }

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    });

    const data = await response.json();
    console.log("Paystack verify response:", data);

    if (data.status && data.data.status === "success") {
      return NextResponse.json({ success: true, data: data.data });
    } else {
      return NextResponse.json({ success: false, message: data.message || "Payment was not successful" }, { status: 400 });
    }
  } catch (err) {
    console.error("Payment verification failed:", err);
    return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 500 });
  }
}
