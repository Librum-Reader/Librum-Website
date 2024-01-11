import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 5;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req, res) {
  const { amount: donationAmount } = await req.json();

  // Create a customer
  const customer = await stripe.customers.create({
    name: "Test User",
    address: {
      line1: "1844 Atha Drive",
      city: "Bakersfield",
      postal_code: "93301",
      country: "US",
    },
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: donationAmount * 100,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
    description: "Donation to the Librum Reader",
    customer: customer.id,
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
