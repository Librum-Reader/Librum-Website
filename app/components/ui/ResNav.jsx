"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Heading,
  Link,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "./app/components/ui/Logo";
import { usePathname } from "next/navigation";

import ProfileButton from "./app/components/ui/ProfileButton";
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { FaMoon, FaSun, FaHamburger } from "react-icons/fa";
import LoginButton from "./app/components/ui/LoginButton";

const Links = ["HOME", "NEWS", "CONTACT", "LOGIN"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const navLinks = [
  {
    href: "/",
    text: "HOME",
  },
  {
    href: "/news",
    text: "NEWS",
  },
];

export default function Simple() {
  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleColorTheme = () => {
    toggleColorMode();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const path = usePathname();

  const navLinkComponents = navLinks.map((link, index) => {
    return (
      <Link key={index} href={link.href}>
        <Button variant={path == "/" ? "navLinkHome" : "navLink"}>
          {link.text}
        </Button>
      </Link>
    );
  });

  return (
    <>
      <Flex
        w="100%"
        maxW="1300px"
        align="center"
        mx="auto"
        justify="space-between"
      >
        <Flex
          align="center"
          gap="1rem"
          justify={{
            base: "space-between",
            sm: "space-between",
            md: "space-between",
            lg: "start",
          }}
          w={{ base: "100%", sm: "100%" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Logo />
          <Heading size="lg" textColor={path == "/" ? "white" : "text-default"}>
            Librum
          </Heading>
          <Image src="/ereader1.png" display={{ md: "none" }} />
        </Flex>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Button variant="link" onClick={toggleColorTheme}>
                {colorMode === "dark" ? (
                  <FaSun color={path == "/" ? "white" : "white"} size={20} />
                ) : (
                  <FaMoon color={path == "/" ? "white" : "#946BDE"} size={20} />
                )}
              </Button>
              {navLinkComponents}
              <Button
                variant={path == "/" ? "navLinkHome" : "navLink"}
                onClick={onOpen}
              >
                CONTACT
              </Button>
              {isLoggedIn ? <ProfileButton /> : null}
              <LoginButton />
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        variant="defaultVariant"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <FaSun />
          </DrawerHeader>

          <DrawerBody>
            <Flex direction="column" justify="space-between" h="full">
              <Flex direction="column" gap="1.2rem">
                <Text fontWeight="700">Home</Text>
                <Text fontWeight="700">News</Text>
                <Text fontWeight="700">Contact</Text>
                <Text fontWeight="700">Logout</Text>
              </Flex>
              <Flex align="center" gap="1rem">
                <Avatar size="sm" />
                <Text fontWeight="700">John Doe</Text>
              </Flex>
            </Flex>
          </DrawerBody>

          {/* <DrawerFooter>
            
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
