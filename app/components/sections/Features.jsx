"use client";

import {
  Flex,
  Image,
  Box,
  Text,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Alternate from "./Alternate";

const Features = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex background="bg-default" className="features-container">
      <Image
        src={colorMode == "light" ? "/wave-light.svg" : "/wave.svg"}
        className="wave"
        display={{ base: "none", md: "block" }}
      />
      <Box
        px={{ base: "1rem", md: "9rem" }}
        mt={{ base: "1rem", md: "10rem" }}
        mb={{ base: "6rem", md: "10rem" }}
        className="features-items"
      >
        <Flex gap="10rem" direction="column" w="100%">
          <Alternate />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Features;
