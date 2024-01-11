import { stripe } from "@/app/utils/stripe";
import { getURL } from '@/app/utils/helpers';

export async function POST(req) {
    try {
        const { email, name, customerId } = await req.json();

        // Create a customer if customerId doesn't exist
        const customer = customerId
            ? await stripe.customers.retrieve(customerId)
            : await stripe.customers.create({
                name,
                email,
            });

        const { url } = await stripe.billingPortal.sessions.create({
            customer: customer.id,
            return_url: `${getURL()}/profile`
        });

        return new Response(JSON.stringify({ url }), {
            status: 200
        });

    } catch (err) {
        console.log(err);
        return new Response(
            JSON.stringify({ error: { statusCode: 500, message: err.message } }),
            {
                status: 500
            }
        );
    }
}