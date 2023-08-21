import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaPatreon } from "react-icons/fa";
import Link from "next/link";

const Foss = () => {
  return (
    <Flex
      bg="bg-default"
      direction="column"
      justify="center"
      align="center"
      w="100%"
      pb="10rem"
      gap="2rem"
      px="1rem"
    >
      <Heading size="lg" mb="1rem">
        Free and Open Source
      </Heading>
      <Text>
        Our code is open source so feel free to propose a new feature or
        improvement on it . Also check out our blog for latest updates and
        downloads.
      </Text>
      <Flex gap="10rem" mt="2rem">
        <Link href="https://github.com/Librum-Reader/Librum" target="#">
          <FaGithub color="#946bdd" size={70} />
        </Link>
        <Link href="https://www.patreon.com/librumreader" target="#">
          <FaPatreon color="#946bdd" size={70} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Foss;
