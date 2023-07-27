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
    <Flex
      justify="center"
      w="100%"
      flexDirection="column"
      borderTop="1px"
      borderColor="text-default"
      borderStyle="dotted"
      pt="2rem"
      mt="1rem"
    >
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
      </VStack>
      <Flex w="100%" align="center" justify="flex-start" gap="1rem" m="1rem">
        <Image alt="librum logo" src="ereader1.png" />
        <Heading size="md">Librum</Heading>
      </Flex>
    </Flex>
  );
};

export default Footer;
