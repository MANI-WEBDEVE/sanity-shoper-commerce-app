import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY! as string);

export async function POST(request: NextRequest, response: NextResponse) {
  const { data } = await request.json();
  const amount = data.amount;

  console.log(amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });
    return NextResponse.json({
      paymentIntent: paymentIntent.client_secret,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500 });
  }
}
