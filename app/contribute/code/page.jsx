"use client";
import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
import { BsDisplay } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { PiGithubLogo } from "react-icons/pi";

const StackCard = () => {
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");
  const stackData = [
    {
      title: "Client",
      icon: <BsDisplay size={isLargerThan1700 ? 60 : 40} color="#946BDE" />,
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
      icon: <FaServer size={isLargerThan1700 ? 60 : 40} color="#946BDE" />,
      stack: [
        {
          stackItem: "C#",
        },
        {
          stackItem: "ASP.NET",
        },
        {
          stackItem: "EF-Core",
        },
      ],
    },
    {
      title: "Website",
      icon: <CgWebsite size={isLargerThan1700 ? 60 : 40} color="#946BDE" />,
      stack: [
        {
          stackItem: "React",
        },
        {
          stackItem: "Next.js",
        },
        {
          stackItem: "Chakra UI",
        },
      ],
    },
  ];
  return stackData.map((item, index) => {
    return (
      <Flex
        background="user-profile-bg"
        border="1px"
        borderColor="user-profile-border"
        borderRadius="md"
        height="auto"
        direction="column"
        h="100%"
        align="center"
        padding="1rem"
        gap="2rem"
        className="contribute-card"
        width="1000%"
        key={index}
      >
        <Flex
          width="100%"
          align="center"
          justify="center"
          gap="1rem"
          borderBottom="1px"
          borderColor="#946BDE"
          paddingBottom="1rem"
          direction="column"
        >
          {item.icon}
          <Heading size={isLargerThan1700 ? "xl" : "2xl"}>{item.title}</Heading>
        </Flex>
        {item.stack.map((stackItem, index) => {
          return (
            <Flex
              // border="1px"
              w="100%"
              // bg="bg-default"
              // borderColor="user-profile-border"
              // borderRadius="md"
              px="1rem"
              py=".5rem"
              justify="center"
              key={index}
            >
              <Text
                fontSize={{ base: "md", xl: "lg", "2xl": "xl" }}
                fontWeight={{
                  base: "normal",
                  md: "normal",
                  xl: "semibold",
                  "2xl": "bold",
                }}
              >
                {stackItem.stackItem}
              </Text>
            </Flex>
          );
        })}
        <Flex w="100%" h="100%">
          <Link
            href="https://github.com/Librum-Reader/Librum"
            target="#"
            w="100%"
          >
            <Button
              variant="primary"
              w="100%"
              leftIcon={<PiGithubLogo />}
              alignSelf="flex-end"
            >
              Github
            </Button>
          </Link>
        </Flex>
      </Flex>
    );
  });
};

const Code = () => {
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");

  return (
    <Flex
      width="100%"
      height={{ base: "100%", md: "100dvh" }}
      justify="center"
      // gap="4rem"
      mt={{ base: "0", md: "-78px" }}
      align="center"
      direction="column"
      mb="6rem"
      p="2rem"
    >
      <Text fontSize={isLargerThan1700 ? "xl" : "lg"} mb="2rem" mt="2rem">
        Librum offers many ways to contribute through code. Interested? You can
        contact us via{" "}
        <Link href="#" textColor="#946BDE">
          e-mail
        </Link>{" "}
        , our contact form, or GitHub.
      </Text>
      <Flex
        gap={{ base: "2rem", md: "3rem" }}
        direction={{ base: "column", md: "row" }}
        width={isLargerThan1700 ? "80%" : "100%"}
        px={{ base: "0", md: "7rem" }}
        height="65%"
      >
        <StackCard />
      </Flex>
    </Flex>
  );
};

export default Code;
