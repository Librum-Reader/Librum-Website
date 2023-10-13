import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req, res) {
  const { amount: donationAmount } = await req.json();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: donationAmount * 100,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}

export const config = {
  type: "experimental-background",
};
