import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req, res) {
  const { amount: donationAmount } = await req.json();
  console.log("API", donationAmount);
  // request = await req.body;
  // console.log(request);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: donationAmount * 100,
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const response = JSON.stringify({
    clientSecret: paymentIntent.client_secret,
  });

  console.log(response);
  return Response.json({ clientSecret: paymentIntent.client_secret });
}
