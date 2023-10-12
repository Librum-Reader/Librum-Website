"use client";
import { Card, Button, Flex } from "@chakra-ui/react";
import {
  CardElement,
  AddressElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import DonationCards from "../ui/radio/DonationCards";

const PaymentForm = ({ client_secret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    setClientSecret(client_secret);

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000",
        },
      });

      //   await stripe?.confirmCardPayment(clientSecret, {
      //     payment_method: { card: cardElement },
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <Flex
      width="100%"
      height={{ base: "100%", md: "100dvh" }}
      justify="center"
      // gap="4rem"
      mt={{ base: "0", md: "-78px" }}
      align="center"
      direction="column"
      mb="6rem"
      p="2rem"
    >
      <form onSubmit={onSubmit}>
        <DonationCards />
        <PaymentElement options={paymentElementOptions} />
        <Button type="submit" variant="primary" mt=".7rem" w="full">
          Donate
        </Button>
      </form>
    </Flex>
  );
};

export default PaymentForm;
