import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { Heading, Flex } from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import { BeatLoader } from "react-spinners";

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
      <Heading size="md" mb="1rem" textAlign="center">
        Choose payment method
      </Heading>
      {!loading ? (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm
            client_secret={clientSecret}
            setStep={setStep}
            amount={amount}
          />
        </Elements>
      ) : (
        <Flex w="100%" h="100%" justify="center" align="center">
          <BeatLoader color="#946BDE" />
        </Flex>
      )}
    </>
  );
};

export default Checkout;
