"use client";
import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { BsDisplay } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { PiGithubLogo } from "react-icons/pi";

const StackCard = () => {
  const stackData = [
    {
      title: "Client",
      icon: <BsDisplay size={40} color="#946BDE" />,
      stack: [
        {
          stackItem: "C++",
        },
        {
          stackItem: "Qt",
        },
        {
          stackItem: "Qml",
        },
      ],
    },
    {
      title: "Server",
      icon: <FaServer size={40} color="#946BDE" />,
      stack: [
        {
          stackItem: "C#",
        },
        {
          stackItem: "ASP.NET",
        },
      ],
    },
    {
      title: "Website",
      icon: <CgWebsite size={40} color="#946BDE" />,
      stack: [
        {
          stackItem: "React",
        },
        {
          stackItem: "NextJS",
        },
        {
          stackItem: "Chakra UI",
        },
      ],
    },
  ];
  return stackData.map((item) => {
    return (
      <Flex
        background="user-profile-bg"
        border="1px"
        borderColor="user-profile-border"
        borderRadius="md"
        height="auto"
        direction={{ base: "row", md: "column" }}
        h="100%"
        align="center"
        padding="1rem"
        gap="2rem"
        className="contribute-card"
        width="350px"
      >
        <Flex
          width="100%"
          align="center"
          justify="center"
          gap="1rem"
          borderBottom="1px"
          borderColor="user-profile-border"
          paddingBottom="1rem"
          direction="column"
        >
          {item.icon}
          <Heading>{item.title}</Heading>
        </Flex>
        {item.stack.map((stackItem) => {
          return (
            <Flex
              border="1px"
              w="100%"
              bg="bg-default"
              borderColor="user-profile-border"
              borderRadius="md"
              px="1rem"
              py=".5rem"
            >
              {stackItem.stackItem}
            </Flex>
          );
        })}
        <Flex w="100%" h="100%">
          <Button
            variant="primary"
            w="100%"
            leftIcon={<PiGithubLogo />}
            alignSelf="flex-end"
          >
            Github
          </Button>
        </Flex>
      </Flex>
    );
  });
};

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
        <StackCard />
      </Flex>
    </Flex>
  );
};

export default Code;
