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
  Text,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      backgroundColor="bg-default"
      justify="center"
      w="100%"
      flexDirection="column"
      borderTop="1px"
      borderColor="text-default"
      borderStyle="dotted"
      pt="2rem"
    >
      <VStack backgroundColor="bg-default" pb="1rem">
        <Heading fontSize="1.5rem" mb="1rem">
          Have any questions or concerns?
        </Heading>
        <Input
          type="email"
          placeholder="Enter your email address"
          w="24rem"
          mb="1rem"
          variant="defaultVariant"
        />
        <Textarea
          placeholder="Message"
          w="24rem"
          mb="1rem"
          variant="defaultVariant"
        />
        <Button variant="primary">Send Message</Button>
      </VStack>
      <Grid templateColumns="repeat(3, 1fr)" my="1rem" mx="1rem">
        <Flex align="center" gap="1rem">
          <Image alt="librum logo" src="ereader1.png" />
          <Heading size="md" color="text-default">
            Librum
          </Heading>
        </Flex>
        <Text alignSelf="end" justifySelf="center">
          © 2023 Librum-Reader, All rights reserved
        </Text>
      </Grid>
    </Flex>
  );
};

export default Footer;
