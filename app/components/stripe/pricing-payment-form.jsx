"use client";
import { Card, Button, Flex, useColorMode } from "@chakra-ui/react";
import {
  CardElement,
  AddressElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import DonationCards from "../ui/radio/DonationCards";

const PricingPaymentForm = ({ paymentData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const [error, setError] = useState(undefined);

  const { tier, customerEmail, customerName } = paymentData;


  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(client_secret).then(({ paymentIntent }) => {
  //     console.log("test", client_secret);
  //     console.log(paymentIntent.status);
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");
  //         console.log("success");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  // }, [stripe, client_secret]);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  // console.log("payment", client_secret);

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    // Call the subscribe endpoint and create a Stripe subscription 
    // object. Returns the subscription ID and client secret
    const subscriptionResponse = await fetch(
      '/api/subscribe',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: customerEmail, name: customerName,
          priceId: tier?.tierPriceId
        })
      }
    );
    const subscription = await subscriptionResponse.json();
    const stripePayload = await stripe.confirmCardPayment(
      subscription.clientSecret, // returned by subscribe endpoint
      {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      }
    );
    console.log(stripePayload);
    if (stripePayload.error) {
      // setError(stripePayload.error.message);
      console.log(stripePayload.error.message);
    }

    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: "https://librumreader.com/contribute/donate/thankyou",
    //   },
    // });

    setLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  const cardElementStyle = {
    style: {
      base: {
        iconColor: colorMode == "light" ? "#000" : "#fff",
        padding: "10px 12px",
        color: colorMode == "light" ? "#000" : "#fff",
        fontSize: '18px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: colorMode == "light" ? "#000" : "#fff",
        },
        '::placeholder': {
          color: colorMode == "light" ? "#000" : "#fff",
        },
      },
      invalid: {
        iconColor: '#ff0000',
        color: '#ff0000',
      },
    },
  };

  const handleCardInputChange = (e) => {
    if (e.error === undefined && e.complete === true) {
      setLoading(false);
    }
  }

  return (
    <Flex
      width="100%"
      justify="center"
      // gap="4rem"
      align="center"
      direction="column"
    >
      <form onSubmit={onSubmit} style={{ width: "100%" }} p="4rem">
        {/* <PaymentElement options={paymentElementOptions} /> */}
        <Flex w={"100%"} border="1px solid red" bg={"user-info-bg"} borderColor={"user-profile-border"} p="4" borderRadius={"md"}>
          <CardElement options={cardElementStyle} onChange={handleCardInputChange} />
        </Flex>
        <Button
          type="submit"
          variant="primary"
          mt="2rem"
          w="full"
          h="45px"
          isDisabled={loading && stripe}
        >
          Subscribe
        </Button>
      </form>
    </Flex>
  );
};

export default PricingPaymentForm;
