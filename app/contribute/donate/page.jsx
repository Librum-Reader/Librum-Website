"use client";
import React, { useState } from "react";
import PaymentForm from "../../components/stripe/PaymentForm";
import { Flex } from "@chakra-ui/react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const page = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        setLoading(false);
      });
  }, []);

  const appearance = {
    theme: "night",
    labels: "floating",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Flex mx="auto">
      {loading ? (
        "Loading"
      ) : (
        <Elements options={options} stripe={stripePromise}>
          {loading ? "Loading" : <PaymentForm client_secret={clientSecret} />}
        </Elements>
      )}
    </Flex>
  );
};

export default page;
