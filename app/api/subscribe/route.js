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

    const { email, name, priceId } = await req.json();
    try {
        // Create a customer
        const customer = await stripe.customers.create({
            name,
            email,
            address: {
                line1: "1844 Atha Drive",
                city: "Bakersfield",
                postal_code: "93301",
                country: "US",
            },
        });

        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ price: priceId }],
            payment_behavior: 'default_incomplete',
            metadata: {
                // You can save details about your user here
                // Or any other metadata that you would want as reference.
            },
            expand: ['latest_invoice.payment_intent'],
        });
        return NextResponse.json({
            code: 'subscription_created',
            subscriptionId: subscription.id,
            clientSecret:
                subscription.latest_invoice.payment_intent.client_secret,
        });
    } catch (error) {
        console.log("[SUBSCRIBE_POST]", error);
        return new NextResponse("Internal error", { status: 500 });

    }
}
