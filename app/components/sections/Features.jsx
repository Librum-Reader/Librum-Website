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
      />
      <Box px="9rem" mt="10rem" mb="10rem" className="features-items">
        <Flex gap="10rem" direction="column" w="100%">
          <Alternate />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Features;
