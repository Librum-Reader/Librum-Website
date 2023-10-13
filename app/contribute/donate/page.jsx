"use client";
import React, { useState, useEffect } from "react";
import PaymentForm from "../../components/stripe/PaymentForm";
import DonationCards from "@/app/components/ui/radio/DonationCards";
import { Flex, Heading, Button } from "@chakra-ui/react";
import Checkout from "../../components/stripe/Checkout";

const Donate = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState();

  return (
    <Flex
      width="80%"
      height={{ base: "100%", md: "100dvh" }}
      mx="auto"
      mb="6rem"
      p="2rem"
      gap="4rem"
    >
      <Flex w="60%" direction="column">
        <Heading mb="1rem">Lorem ipsum</Heading>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sunt hic
        suscipit enim quas nesciunt distinctio iste! Dolores nemo deserunt
        veritatis laboriosam recusandae architecto qui, repudiandae tempore
        molestias a accusantium quis dolorem, labore quisquam possimus ratione
        obcaecati excepturi eaque reprehenderit nostrum sequi eum aliquam
        voluptatem unde. Vel earum rem quaerat?
      </Flex>
      <Flex mx="auto" direction="column" w="300px">
        {step === 1 ? (
          <>
            <Heading size="md" mb="1rem">
              Select donation amount
            </Heading>
            <DonationCards setAmount={setAmount} />
            <Button
              variant="primary"
              h="45px"
              onClick={() => {
                setStep(2);
              }}
            >
              Continue
            </Button>
          </>
        ) : null}

        {step === 2 ? <Checkout amount={amount} setStep={setStep} /> : null}
      </Flex>
    </Flex>
  );
};

export default Donate;
