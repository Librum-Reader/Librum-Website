"use client";

import React, { useState } from "react";

import {
  Flex,
  Heading,
  Button,
  Text,
  List,
  ListItem,
  ListIcon,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const PricingCard = () => {
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");
  const pricingData = [
    {
      tierName: "Basic",
      tierDescription: "Experience the power and simplicity of Librum.",
      tierPrice: "Free",
      tierLink: "#",
      tierSpecs: [
        {
          spec: "2GB of book storage",
        },
        {
          spec: "10 AI Explanation requests",
        },
      ],
    },
    {
      tierName: "Plus",
      tierDescription: "Increased storage and AI request limit.",
      tierPrice: "2.49€",
      tierLink: "#",
      tierSpecs: [
        {
          spec: "5GB of book storage",
        },
        {
          spec: "25 AI Explanation requests/day",
        },
      ],
    },
    {
      tierName: "Pro",
      tierDescription:
        "More storage and AI power, with an addition of a statistics page.",
      tierPrice: "4.99€",
      tierLink: "#",
      tierSpecs: [
        {
          spec: "15GB of book storage",
        },
        {
          spec: "50 AI Explanation requests/day",
        },
        {
          spec: "Statistics page",
        },
      ],
    },
    {
      tierName: "Elite",
      tierDescription: "Even more storage.",
      tierPrice: "9.99€",
      tierLink: "#",
      tierSpecs: [
        {
          spec: "50GB of book storage",
        },
        {
          spec: "100 AI Explanation requests/day",
        },
        {
          spec: "Statistics page",
        },
      ],
    },
  ];

  return (
    <>
      {pricingData.map((tier, index) => {
        return (
          <Flex
            background="user-profile-bg"
            border="1px"
            borderColor="user-profile-border"
            borderRadius="md"
            direction="column"
            padding="1.5rem"
            gap="1rem"
            className="contribute-card"
            width="20rem"
            alignSelf="flex-start"
            minH={isLargerThan1700 ? "640px" : "630px"}
            key={index}
          >
            <Flex
              direction="column"
              minH={isLargerThan1700 ? "200px" : "230px"}
              gap="2rem"
            >
              <Text fontSize="xl" textColor="#946bde" fontWeight="bold">
                {tier.tierName}
              </Text>
              <Text fontSize="md" minH={isLargerThan1700 ? "50px" : "100px"}>
                {tier.tierDescription}
              </Text>
              <Text fontSize="2rem" fontWeight="bold" mb="2rem">
                {tier.tierPrice}
              </Text>
            </Flex>
            <Button variant="primary" mb="2rem" h="3rem">
              Get started
            </Button>
            <Flex direction="column" mb="2rem">
              <Text fontWeight="bold" mb="1rem">
                What you get:
              </Text>
              <List spacing={1}>
                {tier.tierSpecs.map((spec) => {
                  return (
                    <ListItem>
                      <Flex align="baseline" gap=".5rem">
                        <Box>
                          <AiOutlineCheckCircle
                            color="#946bde"
                            className="tier-check"
                          />
                        </Box>
                        <Text m="0">{spec.spec}</Text>
                      </Flex>
                    </ListItem>
                  );
                })}
              </List>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default PricingCard;
