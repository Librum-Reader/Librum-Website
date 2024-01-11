import { getURL } from '@/app/utils/helpers';
import { stripe } from "@/app/utils/stripe";

export async function POST(req) {
    if (req.method === 'POST') {

        // 1. Destructure the price and quantity from the POST body
        const { priceId, email, name, metadata = {}, customerId } = await req.json();

        try {
            // Create a customer if customerId doesn't exist
            const customer = customerId
                ? await stripe.customers.retrieve(customerId)
                : await stripe.customers.create({
                    name,
                    email,
                });

            // 4. Create a checkout session in Stripe
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card', "paypal", "link"],
                billing_address_collection: 'required',
                customer: customer.id,
                customer_update: {
                    address: 'auto'
                },
                line_items: [
                    {
                        price: priceId,
                        quantity: 1
                    }
                ],
                mode: 'subscription',
                allow_promotion_codes: true,
                subscription_data: {
                    trial_from_plan: true,
                    metadata
                },
                success_url: `${getURL()}/profile`,
                cancel_url: `${getURL()}/`
            });
            if (session) {
                return Response.json({ sessionId: session.id }, { status: 200 });
            } else {
                return new Response(
                    JSON.stringify({
                        error: { statusCode: 500, message: 'Session is not defined' }
                    }),
                    { status: 500 }
                );
            }
        } catch (err) {
            console.log(err);
            return new Response(JSON.stringify(err), { status: 500 });
        }
    } else {
        return new Response('Method Not Allowed', {
            headers: { Allow: 'POST' },
            status: 405
        });
    }
}