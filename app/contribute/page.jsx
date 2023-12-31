"use client";

import React from "react";
import { Flex, Text, Heading, useMediaQuery, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaPatreon } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { PiPatreonLogoFill } from "react-icons/pi";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";

const ContributeCard = ({ text, icon, link }) => {
  return (
    <Link href={link} _hover={{ textDecoration: "none" }}>
      <Flex
        // background="user-profile-bg"
        border="1px"
        borderColor="user-profile-border"
        borderRadius="md"
        height="auto"
        direction={{ base: "column", md: "column" }}
        align="center"
        padding={{ base: "1rem 2rem", md: "2rem 3rem" }}
        // gap="1rem"
        className="contribute-card"
        //   p={{ base: "1rem", md: "2rem" }}
        w={{ base: "300px", md: "250px" }}
        h="200px"
        justifyContent={"space-evenly"}
      >
        {icon}
        <Heading size="md">{text}</Heading>
      </Flex>
    </Link>
  );
};

const Contribute = () => {
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");

  const contributeItems = [
    {
      text: "CODE",
      icon: (
        <AiFillGithub size={"60"} color="#946BDE" />
      ),
      link: "/contribute/code",
    },
    {
      text: "DONATE",
      icon: (
        <BiSolidDonateHeart
          size={"60"}
          color="#946BDE"
        />
      ),
      link: "/contribute/donate",
    },
    {
      text: "DESIGN",
      icon: <CgFigma size={"60"} color="#946BDE" />,
      link: "/contribute/design",
    },
    {
      text: "OTHER",
      icon: (
        <IoPeopleSharp size={"60"} color="#946BDE" />
      ),
      link: "/contribute/other",
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
      <Flex
        gap={{ base: "2rem", md: "3rem" }}
        direction={{ base: "column", md: "row" }}
      >
        {contributeItems.map((item, index) => {
          return ContributeCard({
            text: item.text,
            icon: item.icon,
            link: item.link,
          });
        })}
      </Flex>
    </Flex>
  );
};

export default Contribute;
