"use client";

import React from "react";
import {
  Flex,
  Text,
  Heading,
  useMediaQuery,
  Link,
  Image,
  List,
  ListItem,
  OrderedList,
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
        <Image
          src="/community.svg"
          width="40%"
          alignSelf="center"
          alt="Community"
        />
        <Flex w={{ base: "100%", md: "80%" }} direction="column">
          <Flex align="center" gap="1rem" mb="2rem">
            <Heading m="0">Contribute Your Unique Skills</Heading>
          </Flex>
          <Flex direction="column" gap="1rem">
            <Text>
              While we greatly appreciate code contributions, donations, and
              design support, we also recognize that there are countless
              valuable skills out there. If you have a skill or expertise that
              you think could be useful to our project, feel free to reach out
              to us at contact@librumreader.com
            </Text>
            <Text>Other ways to contribute:</Text>
            <Text>
              <OrderedList spacing={6}>
                <ListItem>
                  Spread the Word: Even if you don&apos;t have a specific skill
                  to contribute, you can still support Librum in various ways.
                  Share our application with your friends and colleagues,
                  encouraging them to explore and utilize it.
                </ListItem>
                <ListItem>
                  Leave Reviews: If you&apos;ve used Librum and found it
                  valuable, consider leaving a review. Your feedback not only
                  helps us improve but also guides others in discovering the
                  benefits of our software.
                </ListItem>
                <ListItem>
                  Write Blogs: If you enjoy writing, consider creating blog
                  posts about your experience with Librum, its features, and how
                  it helps you. Share your insights and tips with our community.
                </ListItem>
                <ListItem>
                  Social Media Sharing: Promote Librum on your social media
                  platforms. Share your thoughts, tips, and help us expand our
                  user base.
                </ListItem>
              </OrderedList>
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
