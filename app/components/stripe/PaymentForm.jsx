"use client";
import { Card } from "@chakra-ui/react";
import {
  CardElement,
  AddressElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";

const PaymentForm = ({ client_secret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    setClientSecret(client_secret);
    console.log(client_secret);

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
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");
    console.log(elements);
    try {
      //   const { data } = await fetch("/api/create-payment-intent", {
      //     method: "POST",
      //     data: { amount: 89 },
      //   });

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
    <div>
      <form onSubmit={onSubmit}>
        <PaymentElement options={paymentElementOptions} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
