"use client";

import React, { useState } from "react";

import { Flex, useMediaQuery } from "@chakra-ui/react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");
  return (
    <Flex
      width={{ base: "100%", md: "80%" }}
      height={{ base: "100%", md: "100dvh" }}
      mx={{ base: "0", md: "auto" }}
      mb="6rem"
      mt="2rem"
      p="2rem"
      gap={isLargerThan1700 ? "4rem" : "2rem"}
      direction={{ base: "column", md: "row" }}
      justify="center"
    >
      <PricingCard />
    </Flex>
  );
};

export default Pricing;
