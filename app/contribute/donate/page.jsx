"use client";
import React, { useState } from "react";
import DonationCards from "@/app/components/ui/radio/DonationCards";
import DonationFreq from "../../components/stripe/DonationFreq";
import CustomDonation from "../../components/stripe/CustomDonation";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import Checkout from "../../components/stripe/Checkout";
import { BiSolidDonateHeart } from "react-icons/bi";

const Donate = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [validInput, setValidInput] = useState(true);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(10);

  const validateDonationInput = () => {
    if (amount) {
      setStep(2);
    } else {
      setValidInput(true);
      setValidInput(false);
    }
  };

  return (
    <Flex
      width={{ base: "100%", md: "80%" }}
      height={{ base: "100%", md: "100dvh" }}
      mx={{ base: "0", md: "auto" }}
      mb="6rem"
      mt="2rem"
      p="2rem"
      gap="4rem"
      direction={{ base: "column", md: "row" }}
    >
      <Flex w={{ base: "100%", md: "60%" }} direction="column">
        <Flex align="center" gap="1rem" mb="2rem">
          <BiSolidDonateHeart size={50} color="#946bde" />
          <Heading m="0">Thank you for supporting Librum</Heading>
        </Flex>
        Thank you for your generous support of Librum! Your contributions enable
        us to continue developing and improving our open source, self-hostable
        e-reader. We are deeply grateful for your commitment to making Librum
        better with every update.
      </Flex>
      <Flex
        direction="column"
        w={{ base: "100%", md: "400px" }}
        border="1px"
        borderColor="user-profile-border"
        borderRadius="md"
        p="2rem"
        alignSelf="flex-start"
      >
        {step === 1 ? (
          <>
            <Heading size="md" mb="1rem">
              Select donation frequency
            </Heading>
            <DonationFreq />
            <Heading size="md" mb="1rem" mt="2rem">
              Select donation amount
            </Heading>
            <DonationCards setAmount={setAmount} />
            {validInput ? null : (
              <Text fontSize="sm" textColor="red">
                Please enter a valid amount
              </Text>
            )}
            <CustomDonation amount={amount} setAmount={setAmount} />
            <Button variant="primary" h="50px" onClick={validateDonationInput}>
              Donate and support
            </Button>
          </>
        ) : null}

        {step === 2 ? <Checkout amount={amount} setStep={setStep} /> : null}
      </Flex>
    </Flex>
  );
};

export default Donate;
