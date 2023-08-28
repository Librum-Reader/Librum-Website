"use client";
import { Flex, Heading, Text, Box, Card, CardBody } from "@chakra-ui/react";
import ContactForm from "../components/ui/ContactForm";
const Contact = () => {
  return (
    <Flex background="#282c34" align="center" direction="column" h="100vh">
      <Card bgColor="gray.700" borderRadius="md" mt="2rem" maxW="30%">
        <CardBody p="2rem">
          <Box>
            <Heading size="xl" color="#946bde" mb="2rem">
              Need Help?
            </Heading>
            <Text fontSize="l" color="white" mb="2rem">
              Reach us through the form below, or at help@librumreader.com if
              you have any questions, we are 100% responsive and reply quickly!
            </Text>
            <ContactForm />
          </Box>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Contact;
