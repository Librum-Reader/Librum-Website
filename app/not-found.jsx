"use client";

import React from "react";
import Container from "./components/ui/Container";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Flex direction="column" w="100%" h="100dvh" align="center" mt="6rem">
        <Heading fontSize="6rem" fontWeight={700}>
          404
        </Heading>
        <Text fontSize="2em" mb="2rem">
          Whoops! Page not found
        </Text>
        <Image src="/not_found.svg" w="400px" mb="4rem" />
      </Flex>
    </Container>
  );
};

export default NotFound;
