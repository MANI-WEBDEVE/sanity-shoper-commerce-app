'use client'
import React from "react";
import Cart from "@/components/Cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const page = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHED_KEY! as string
  );
  return (
    <div className="max-w-7xl mx-auto ">
      <Elements stripe={stripePromise}>
        <Cart />
      </Elements>
    </div>
  );
};

export default page;
