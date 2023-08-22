"use client";
import {
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  Card,
  CardBody,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import React from "react";

const MobileFeatureCard = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      bg={props.bg}
      px="1rem"
      py="4rem"
      display={{ base: "flex", md: "none" }}
    >
      <Image
        src={colorMode === "dark" ? props.image : props.image_light}
        alt="Illustration"
        shadow="lg"
        borderRadius="md"
      />
      <Heading mb="1rem" mt="3rem" fontSize="xl">
        {props.title}
      </Heading>
      <Text lineHeight="1.4em">{props.text}</Text>
    </Flex>
  );
};

export default MobileFeatureCard;
