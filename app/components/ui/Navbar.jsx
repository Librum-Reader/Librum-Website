"use client";
import React from "react";
import { Flex, Spacer, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import LoginButton from "../ui/LoginButton";

const navLinks = [
  {
    href: "/",
    text: "HOME",
  },
  {
    href: "/contact",
    text: "CONTACT",
  },
  {
    href: "/news",
    text: "NEWS",
  },
];

const navLinkComponents = navLinks.map((link, index) => {
  return (
    <Link key={index} href={link.href}>
      <Button colorScheme="gray" variant="ghost">
        {link.text}
      </Button>
    </Link>
  );
});

const Navbar = () => {
  return (
    <Flex maxW="1300px" width="100%" mx="auto">
      <Flex
        pt={4}
        width="100%"
        justifyContent="center"
        alignItems="center"
        className="navbar"
        pb={4}
      >
        <Image alt="librum logo" src="ereader1.png" />
        <Spacer />
        <Flex gap="2rem">
          {navLinkComponents}
          <LoginButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
