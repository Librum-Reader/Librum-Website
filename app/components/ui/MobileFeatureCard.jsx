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
} from "@chakra-ui/react";

import React from "react";

const MobileFeatureCard = () => {
  return (
    <Card flexBasis="fit-content" className="mobile-card">
      <CardBody p="1rem">
        <Heading mb="1rem" textAlign="right">
          Your own library
        </Heading>
        <Image
          src="/screenshots/library_dark.png"
          alt="Illustration"
          shadow="lg"
        />
        <Text mt="1rem" textAlign="justify">
          Create your own personalized online library that you can access from
          any device, anytime, anywhere.
        </Text>
      </CardBody>
    </Card>
  );
};

export default MobileFeatureCard;
