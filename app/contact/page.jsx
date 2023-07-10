"use client";
import {
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex background="#282c34" align="center" direction="column" h="100vh">
      <Box>
        <Heading color="#946bde" mt="10rem" mb="2rem">
          Need Help?
        </Heading>
        <Text color="white" mb="2rem">
          Reach us through the form below, or at help@librumreader.com if you
          have any questions, we are 100% responsive and reply quickly!
        </Text>
        <FormControl alignSelf="flex-start">
          <FormLabel color="white">Name</FormLabel>
          <Input alignSelf="flex-start" mb="1rem" />
          <FormLabel color="white">Email address</FormLabel>
          <Input type="email" alignSelf="flex-start" mb="1rem" />
          <FormLabel color="white">Message</FormLabel>
          <Textarea mb="1rem" />
          <Button>Submit</Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Contact;
