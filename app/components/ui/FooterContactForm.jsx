import React, { useState } from "react";
import {
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  Flex,
  toast,
  useToast,
} from "@chakra-ui/react";

import { usePathname } from "next/navigation";

const FooterContactForm = () => {
  const path = usePathname();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setiIsLoading] = useState(false);

  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  const toast = useToast();

  const handleSubmit = async (e) => {
    if (!email || !message) {
      e.preventDefault();
      toast({
        title: "Uh oh!",
        description:
          "Please make sure all the fields are filled out before submitting your message.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      const values = {
        Name: "Footer contact form",
        Email: email,
        Message: message,
      };
      setiIsLoading(true);
      try {
        await submitForm(e, values);
      } catch (err) {
        console.log(err);
      }
      setMessage("");
      setEmail("");
      setiIsLoading(false);
      toast({
        title: "Thank you!",
        description: "Your message has been received.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      e.preventDefault();
    }
  };

  const submitForm = async (e, values) => {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/ajax/help@librumreader.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if ((await data?.success) !== "true") {
            throw new Error("Something went wrong!");
          }
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VStack
      backgroundColor="bg-default"
      mb="4.5rem"
      px={{ base: "1rem", md: "0" }}
    >
      <Heading fontSize="1.5rem" mb="1rem" textAlign="center">
        {path === "/news" || path === "/posts"
          ? "Got any feedback?"
          : "Have any questions or concerns?"}
      </Heading>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="footer-form"
      >
        {/* <Flex direction="column" gap=".5rem" w="100%"> */}
        <Input
          type="email"
          placeholder="Enter your email address"
          w={{ base: "100%", md: "24rem" }}
          mb="1rem"
          variant="defaultVariant"
          onChange={handleEmail}
          value={email}
        />
        <Textarea
          placeholder="Message"
          w={{ base: "100%", md: "24rem" }}
          mb="1rem"
          variant="defaultVariant"
          onChange={handleMessage}
          value={message}
        />
        <Button
          variant="primary"
          size="lg"
          height="2.5rem"
          type="submit"
          isLoading={isLoading}
          alignSelf="center"
        >
          Send Message
        </Button>
        {/* </Flex> */}
      </form>
    </VStack>
  );
};

export default FooterContactForm;
