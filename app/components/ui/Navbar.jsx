"use client";
import React from "react";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
	return (
		<Flex pt="2rem" w="100%" pl={4} pr={4} justify="center" className="navbar">
			<Box>Librum</Box>
			<Spacer />
			<Flex gap="2rem">
				<Link href="/">
					<Button colorScheme="teal" variant="ghost">
						HOME
					</Button>
				</Link>
				<Link href="/contact">
					<Button colorScheme="teal" variant="ghost">
						CONTACT
					</Button>
				</Link>
				<Link href="/news">
					<Button colorScheme="teal" variant="ghost">
						NEWS
					</Button>
				</Link>
				<Button colorScheme="teal" variant="solid">
					LOGIN
				</Button>
			</Flex>
		</Flex>
	);
};

export default Navbar;
