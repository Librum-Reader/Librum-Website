import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { Heading } from "@chakra-ui/react";
import DonationCards from "../ui/radio/DonationCards";
import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  AddressElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = ({ amount, setStep }) => {
  const [clientSecret, setClientSecret] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
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
    <>
      <Heading size="md" mb="1rem">
        Choose payment method
      </Heading>
      {!loading ? (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm client_secret={clientSecret} setStep={setStep} />
        </Elements>
      ) : null}
    </>
  );
};

export default Checkout;
