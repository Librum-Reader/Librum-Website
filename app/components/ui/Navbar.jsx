"use client";
import React from "react";
import { Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

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
		href: "/",
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
		<Flex
			pt={4}
			w="100%"
			pl={4}
			pr={4}
			justifyContent="center"
			alignItems="center"
			className="navbar"
		>
			<Image alt="librum logo" src="ereader1.png" />
			<Spacer />
			<Flex gap="2rem">
				{navLinkComponents}
				<Button colorScheme="teal" variant="solid">
					LOGIN
				</Button>
			</Flex>
		</Flex>
	);
};

export default Navbar;
