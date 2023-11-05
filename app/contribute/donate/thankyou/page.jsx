"use client";
import React, { useState } from "react";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { BiSolidDonateHeart } from "react-icons/bi";

const ThankYou = () => {
  return (
    <Flex
      width={{ base: "100%", md: "80%" }}
      height={{ base: "100%", md: "100dvh" }}
      mx={{ base: "0", md: "auto" }}
      mb="6rem"
      mt="2rem"
      p="2rem"
      gap="2rem"
      direction="column"
      align="center"
    >
      <Heading size="xl">Thank you</Heading>
      <Text>
        Thank you for your generous donation to Librum! Your support makes a
        meaningful impact and keeps our mission of enhancing the world of
        digital reading alive.
      </Text>
    </Flex>
  );
};

export default ThankYou;
