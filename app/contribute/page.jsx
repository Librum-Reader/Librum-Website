"use client";

import React from "react";
import { Flex, Text, Heading, useMediaQuery } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaPatreon } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { PiPatreonLogoFill } from "react-icons/pi";

const ContributeCard = ({ text, icon }) => {
  return (
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
      //   p={{ base: "1rem", md: "2rem" }}
      //   direction={{ base: "column", md: "row" }}
      // w="320px"
      // h="255px"
    >
      {icon}
      <Heading size="lg">{text}</Heading>
    </Flex>
  );
};

const Contribute = () => {
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");

  const contributeItems = [
    {
      text: "CODE",
      icon: (
        <AiFillGithub size={isSmallerThan400 ? "50" : "200"} color="#946BDE" />
      ),
    },
    {
      text: "DESIGN",
      icon: <CgFigma size={isSmallerThan400 ? "50" : "200"} color="#946BDE" />,
    },
    {
      text: "FINANCIAL",
      icon: (
        <PiPatreonLogoFill
          size={isSmallerThan400 ? "50" : "200"}
          color="#946BDE"
        />
      ),
    },
    {
      text: "OTHER",
      icon: (
        <PiPatreonLogoFill
          size={isSmallerThan400 ? "50" : "200"}
          color="#946BDE"
        />
      ),
    },
  ];

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
      <Heading size="xl">Contribute to Librum</Heading>
      <Flex gap="2rem" direction={{ base: "column", md: "row" }}>
        {contributeItems.map((item, index) => {
          return ContributeCard({ text: item.text, icon: item.icon });
        })}
      </Flex>
    </Flex>
  );
};

export default Contribute;
