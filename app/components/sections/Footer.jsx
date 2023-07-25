import React from "react";
import {
  Flex,
  Input,
  Textarea,
  FormLabel,
  VStack,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack backgroundColor="bg-default" pb="1rem">
      <Heading size="lg" mb="1rem">
        Have any questions or concerns?
      </Heading>
      <Input
        bgColor="whitesmoke"
        type="email"
        placeholder="Enter your email address"
        w="32rem"
        mb="1rem"
      />
      <Textarea
        bgColor="whitesmoke"
        placeholder="Message"
        w="32rem"
        mb="1rem"
      />
      <Button variant="primary">Send Message</Button>
      <Flex w="100%" align="center">
        <Image alt="librum logo" src="ereader1.png" />
        <Heading size="md">Librum</Heading>
      </Flex>
    </VStack>
  );
};

export default Footer;
