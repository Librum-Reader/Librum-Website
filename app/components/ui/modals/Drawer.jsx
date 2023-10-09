import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  Divider,
  Flex,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSelector } from "react-redux/es/hooks/useSelector";
import useModalToggle from "../../../Hooks/useModalToggle";

import MobileNavLogo from "../MobileNavLogo";
import ProfileButtonMobile from "../ProfileButtonMobile";

import { FaMoon, FaAngleRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import SunIcon from "../SunIcon";

const MobileDrawer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { toggleMobileDrawer, isMobileDrawerOpen } = useModalToggle();

  const toggleColorTheme = () => {
    toggleColorMode();
  };

  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });

  const path = usePathname();

  return (
    <Drawer
      isOpen={isMobileDrawerOpen}
      placement="right"
      onClose={toggleMobileDrawer}
      variant="defaultVariant"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Flex align="center" justify="space-between" pr="24px">
            <Flex align="center" gap="1rem" mt="1rem" mb="1rem" px="24px">
              <MobileNavLogo />
              <Heading
                size="lg"
                textColor={colorMode === "dark" ? "white" : "#946BDE"}
              >
                Librum
              </Heading>
            </Flex>
            <FaXmark className="res-theme-icon" onClick={toggleMobileDrawer} />
          </Flex>
          <Divider />
        </DrawerHeader>
        <DrawerBody>
          <Flex direction="column" h="100%">
            <Flex
              direction="column"
              w="100%"
              align="start"
              gap="1rem"
              px="10px"
            >
              <Link
                href="/"
                style={{ display: "flex", width: "100%" }}
                onClick={toggleMobileDrawer}
              >
                <Button
                  w="full"
                  size="md"
                  variant={path === "/" ? "drawerActive" : "drawerButton"}
                  rightIcon={<FaAngleRight />}
                  iconSpacing="auto"
                >
                  HOME
                </Button>
              </Link>
              <Link
                href="/news"
                style={{ display: "flex", width: "100%" }}
                onClick={toggleMobileDrawer}
              >
                <Button
                  w="full"
                  size="md"
                  variant={path === "/news" ? "drawerActive" : "drawerButton"}
                  rightIcon={<FaAngleRight />}
                  iconSpacing="auto"
                >
                  NEWS
                </Button>
              </Link>
              <Button
                w="full"
                size="md"
                variant="drawerButton"
                rightIcon={<FaAngleRight />}
                iconSpacing="auto"
                onClick={() => {
                  onOpen();
                  onDrawerClose();
                }}
              >
                CONTACT
              </Button>
            </Flex>
            <Flex direction="column" mt="auto">
              <Divider />
              <Flex
                justify="space-between"
                align="center"
                px="10px"
                pt="1rem"
                pb=".5rem"
              >
                <Flex align="center" gap="1rem">
                  {isLoggedIn ? (
                    <Link href="" onClick={onDrawerClose}>
                      <ProfileButtonMobile />
                    </Link>
                  ) : (
                    <Button
                      onClick={() => {
                        setLoginOpen(true);
                        console.log("open login", loginOpen);
                      }}
                      variant="drawerButton"
                    >
                      LOGIN
                    </Button>
                  )}
                </Flex>
                {colorMode === "dark" ? (
                  <Button variant="link" onClick={toggleColorTheme}>
                    <SunIcon />
                  </Button>
                ) : (
                  <Button variant="link" onClick={toggleColorTheme}>
                    <FaMoon
                      color={"#946BDE"}
                      size={20}
                      className="res-theme-icon"
                    />
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
