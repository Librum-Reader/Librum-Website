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
import wave from "../../../public/wave.svg";
import Alternate from "./Alternate";

const Features = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex background="bg-default" className="features-container">
      <Image
        src={colorMode == "light" ? "/wave-light.svg" : "/wave.svg"}
        className="wave"
      />
      <Box
        maxW="1300px"
        mx="auto"
        mt="10rem"
        mb="10rem"
        className="features-items"
      >
        <Flex mx="auto" gap="10rem" direction="column">
          <Alternate />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Features;
