"use client";

import React from "react";
import { Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Impressum = () => {
  return (
    <Flex
      w="100%"
      maxW="1300px"
      px={{ base: "0", md: "8.5em" }}
      py={{ base: "0", md: " 9em" }}
      mx={{ base: "1rem", md: "auto" }}
      h="100dvh"
    >
      <VStack mt={{ base: "1rem", md: "10rem" }} align="start">
        <Heading mb="2rem">About Us</Heading>
        <Text>Librum-Reader</Text>
        <Text>Kirchenkamp 2, 50226, Frechen Germany</Text>
        <Heading mb="2rem" mt="6rem">
          Contact
        </Heading>
        <Text>Owner: David Lazarescu</Text>
        <Text>
          E-Mail:{" "}
          <Link href="mailto:contact@librumreader.com">
            contact@librumreader.com
          </Link>
        </Text>
        <Text>
          Internet:{" "}
          <Link href="https://librumreader.com">https://librumreader.com</Link>
        </Text>
      </VStack>
    </Flex>
  );
};

export default Impressum;
