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

const PaymentForm = ({ client_secret, setStep }) => {
  const stripe = useStripe();
  const [donationAmount, setDonationAmount] = useState();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // setClientSecret(client_secret);

    // if (!clientSecret) {
    //   return;
    // }

    stripe.retrievePaymentIntent(client_secret).then(({ paymentIntent }) => {
      console.log("test", client_secret);
      console.log(paymentIntent.status);
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          console.log("success");
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
  }, [stripe, client_secret]);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  console.log("payment", client_secret);

  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   stripe.retrievePaymentIntent(client_secret).then(({ paymentIntent }) => {
    //     switch (paymentIntent.status) {
    //       case "succeeded":
    //         setMessage("Payment succeeded!");
    //         console.log("succeeded");
    //         console.log("form secret", client_secret);
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

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/contribute/donate/#",
      },
    });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <Flex
      width="100%"
      justify="center"
      // gap="4rem"
      align="center"
      direction="column"
    >
      <form onSubmit={onSubmit} width="300px">
        <PaymentElement options={paymentElementOptions} />
        <Button type="submit" variant="primary" mt=".7rem" w="full" h="45px">
          Donate
        </Button>
        <Button
          onClick={() => {
            setStep(1);
          }}
          variant="secondary"
          mt=".7rem"
          w="full"
          h="45px"
        >
          Change amount
        </Button>
      </form>
    </Flex>
  );
};

export default PaymentForm;
