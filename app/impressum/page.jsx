"use client";

import React from "react";
import { Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Impressum = () => {
  return (
    <VStack
      align="flex-start"
      w="100%"
      maxW="1300px"
      px={{ base: "0", md: "8.5em" }}
      py={{ base: "1rem", md: " 9em" }}
      mx={{ base: "1rem", md: "auto" }}
      h="100dvh"
      spacing={1}
    >
      <VStack spacing={16} align="start">
        <VStack align="flex-start">
          <Heading mb="1.5rem">About Us</Heading>
          <Text>Librum-Reader</Text>
          <Text>Kirchenkamp 2, 50226, Frechen Germany</Text>
        </VStack>
        <VStack align="flex-start">
          <Heading mb="2rem">Contact</Heading>
          <Text>Owner: David Lazarescu</Text>
          <Text>
            E-Mail:{" "}
            <Link href="mailto:contact@librumreader.com">
              contact@librumreader.com
            </Link>
          </Text>
          <Text>
            Internet:{" "}
            <Link href="https://librumreader.com">
              https://librumreader.com
            </Link>
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Impressum;
