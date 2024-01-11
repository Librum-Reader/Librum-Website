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
    console.log(amount);
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
      height={{ base: "100%", md: "100%" }}
      mx={{ base: "0", md: "auto" }}
      mb={{ base: '4rem', md: '6rem' }}
      mt={{ base: '2rem', md: '10rem' }}
      p="2rem"
      gap="4rem"
      direction={{ base: "column", md: "row" }}
    >
      <Flex gap={{ base: "2rem", md: "4rem" }} flexDirection={{ base: "column", md: "row" }} align="center" h="-moz-max-content">
        <Flex w={{ base: "100%", md: "60%" }} direction="column" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" gap="1rem" mb="2rem" direction={{ base: "column", md: "row" }}>
            <BiSolidDonateHeart size={50} color="#946bde" />
            <Heading m="0">Thank you for your support</Heading>
          </Flex>
          <Text>Thank you for your generous support!</Text>
          <Text>
            Your contributions fund the maintenance and development of Librum by
            helping us cover the server cost and allowing us to make investments
            into new areas of development. We are deeply grateful for your
            commitment to making Librum better with every update.
          </Text>
        </Flex>
        <Flex
          direction="column"
          w={{ base: "100%", md: "400px" }}
          border="1px"
          borderColor="user-profile-border"
          borderRadius="md"
          p="2rem"
        >
          {step === 1 ? (
            <>
              <DonationFreq />
              <Heading size="md" mb="1rem" mt="2rem" textAlign="center">
                Select amount
              </Heading>
              <DonationCards setAmount={setAmount} />
              {validInput ? null : (
                <Text fontSize="sm" textColor="red">
                  Please enter a valid amount
                </Text>
              )}
              <CustomDonation amount={amount} setAmount={setAmount} />
              <Button
                variant="primary"
                h="50px"
                onClick={validateDonationInput}
                fontSize="1.1rem"
              >
                Donate and Support
              </Button>
            </>
          ) : null}

          {step === 2 ? <Checkout amount={amount} setStep={setStep} /> : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Donate;
