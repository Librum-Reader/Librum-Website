"use client";

import React from "react";
import {
  Flex,
  Text,
  Heading,
  useMediaQuery,
  Link,
  Image,
} from "@chakra-ui/react";

const Design = () => {
  return (
    <Flex
      width={{ base: "100%", md: "80%" }}
      height={{ base: "100%", md: "100dvh" }}
      mx={{ base: "0", md: "auto" }}
      mb="6rem"
      mt="2rem"
      p="2rem"
      gap="4rem"
      direction={{ base: "column", md: "row" }}
      justify="center"
    >
      <Flex justify="space-between" gap="4rem" alignSelf="flex-start">
        <Image src="/mobile_design.svg" width="40%" alignSelf="center" />
        <Flex w={{ base: "100%", md: "80%" }} direction="column">
          <Flex align="center" gap="1rem" mb="2rem">
            <Heading m="0">Contribute through design</Heading>
          </Flex>
          <Flex direction="column" gap="1rem">
            <Text>
              We are constantly working on new features or on improving old
              ones.
            </Text>
            <Text>
              All of these tasks require a fresh and innovative perspective to
              ensure that our software remains cutting-edge and user-friendly.
              That&apos;s where you come in! We invite talented designers to
              join our open-source community and help us shape the future of
              Librum&apos;s user interface.
            </Text>
            <Text>
              By contributing to our project, you&apos;ll have the opportunity
              to showcase your creativity and design skills to a global
              audience. Whether you&apos;re an experienced designer or just
              starting your journey, there&apos;s a place for you in our
              community.
            </Text>
            <Text>
              If you are interested in contributing to Librum&apos;s design,
              feel free to shoot us an email at{" "}
              <Link href="mailto:contact@librumreader.com" textColor="#946BDE">
                contact@librumreader.com
              </Link>{" "}
              or use the{" "}
              <Link
                textColor="#946BDE"
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, document.body.scrollHeight);
                }}
              >
                contact
              </Link>{" "}
              form below.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Design;
