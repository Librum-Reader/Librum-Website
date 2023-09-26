"use client";
import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { BsDisplay } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { PiGithubLogo } from "react-icons/pi";

const Code = () => {
  return (
    <Flex
      width="100%"
      height={{ base: "100%", md: "100dvh" }}
      justify="center"
      gap="4rem"
      mt={{ base: "0", md: "-78px" }}
      align="center"
      direction="column"
      mb="6rem"
      p="2rem"
    >
      <Flex
        gap={{ base: "2rem", md: "3rem" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          background="user-profile-bg"
          border="1px"
          borderColor="user-profile-border"
          borderRadius="md"
          height="auto"
          direction={{ base: "row", md: "column" }}
          align="center"
          padding="1rem"
          gap="2rem"
          className="contribute-card"
          width="250px"
        >
          <Flex
            width="100%"
            align="center"
            justify="center"
            gap="2rem"
            borderBottom="1px"
            borderColor="user-profile-border"
            paddingBottom="1rem"
          >
            <BsDisplay size={40} color="#946BDE" />
            <Heading>Client</Heading>
          </Flex>
          <Heading size="lg">Text</Heading>
          <Flex w="100%">
            <Button variant="primary" w="100%" leftIcon={<PiGithubLogo />}>
              Github
            </Button>
          </Flex>
        </Flex>
        <Flex
          background="user-profile-bg"
          border="1px"
          borderColor="user-profile-border"
          borderRadius="md"
          height="auto"
          direction={{ base: "row", md: "column" }}
          align="center"
          padding="1rem"
          gap="2rem"
          className="contribute-card"
          width="250px"
        >
          <Flex
            align="center"
            justify="center"
            gap="2rem"
            borderBottom="1px"
            borderColor="user-profile-border"
            paddingBottom="1rem"
            width="100%"
          >
            <FaServer size={40} color="#946BDE" />
            <Heading>Server</Heading>
          </Flex>
          <Heading size="lg">Text</Heading>
          <Flex w="100%">
            <Button variant="primary" w="100%" leftIcon={<PiGithubLogo />}>
              Github
            </Button>
          </Flex>
        </Flex>
        <Flex
          background="user-profile-bg"
          border="1px"
          borderColor="user-profile-border"
          borderRadius="md"
          height="auto"
          direction={{ base: "row", md: "column" }}
          align="center"
          padding="1rem"
          gap="2rem"
          className="contribute-card"
          width="250px"
        >
          <Flex
            align="center"
            justify="center"
            gap="2rem"
            borderBottom="1px"
            borderColor="user-profile-border"
            paddingBottom="1rem"
            width="100%"
          >
            <CgWebsite size={40} color="#946BDE" />
            <Heading>Website</Heading>
          </Flex>
          <Heading size="lg">Text</Heading>
          <Flex w="100%">
            <Button variant="primary" w="100%" leftIcon={<PiGithubLogo />}>
              Github
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Code;
