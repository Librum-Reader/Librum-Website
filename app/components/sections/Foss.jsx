import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaPatreon } from "react-icons/fa";
import Link from "next/link";

const Foss = () => {
  return (
    <Flex
      bg="bg-default"
      pt={{ base: "10rem", md: "0" }}
      direction="column"
      justify="center"
      align="center"
      w="100%"
      pb="10rem"
      gap="2rem"
      px="1rem"
    >
      <Heading size="lg" mb={{ base: "0", md: "-0.6rem" }}>
        Free and Open Source
      </Heading>
      <Text textAlign="center">
        Our code is fully open source, feel free to propose new features or
        improvements.
      </Text>
      <Flex gap={{ base: "5rem", md: "10rem" }} mt={{ base: "0", md: "2rem" }}>
        <Link href="https://github.com/Librum-Reader/Librum" target="#">
          <FaGithub color="#946bdd" className="foss-icon" />
        </Link>
        <Link href="https://www.patreon.com/librumreader" target="#">
          <FaPatreon color="#946bdd" className="foss-icon" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Foss;
