"use client";

import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import wave from "../../../public/wave.svg";
import Alternate from "./Alternate";

const Features = () => {
  return (
    <Flex background="#282c34" className="features-container">
      <Image src="/wave.svg" className="wave" />
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
