"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import {
  Flex,
  VStack,
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Card,
  CardBody,
  CardHeader,
  Center,
  Button,
  Progress,
  Grid,
  Avatar,
  GridItem,
} from "@chakra-ui/react";

import {
  AiOutlineUser,
  AiFillSetting,
  AiFillHeart,
  AiOutlineCloudServer,
} from "react-icons/ai";

import { useState, useEffect } from "react";

import { fetchUserInfo } from "../utils/apiFunctions";

const UserProfile = () => {
  const [token, setToken] = useState(null);
  const [tokenExists, setTokenExists] = useState(false);
  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.user.value);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
    setToken(token);
    setTokenExists(true);
    console.log(token);
  }, [token, router]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      console.log("query: ", token);
      return fetchUserInfo(token);
    },
    enabled: tokenExists,
  });

  if (!isLoading) {
    console.log(data);
  }

  return (
    <Flex w="100%">
      <Flex
        background="bg-default"
        h="100vh"
        w="100%"
        px={{ base: "1rem", md: "9rem" }}
        mt="4.5rem"
        mx="auto"
        maxW="1300px"
        // justify="center"
        mb="4.5rem"
        gap="1rem"
        direction="column"
      >
        <Flex
          border="1px"
          borderColor="mobile-nav-active"
          borderRadius="md"
          p="1rem"
          // w="320px"
          // h="255px"
        >
          <Flex
            direction="column"
            justify="center"
            align="center"
            gap="1rem"
            borderRight="1px"
            borderColor="mobile-nav-active"
            pr="1rem"
          >
            <Avatar size="2xl" />
            <Text fontWeight="bold">John Doe</Text>
            <Button variant="secondary" size="xs">
              Change avatar
            </Button>
          </Flex>
          <Flex
            direction="column"
            p="1rem"
            // w="320px"
            w="100%"
            h="255px"
            borderRight="1px"
            borderColor="mobile-nav-active"
          >
            <Text fontSize="xs" textColor="text-default">
              YOUR INFORMATION
            </Text>
            <Flex direction="column" my="1rem">
              <Text>Username</Text>
              <Text fontWeight="bold" mb="1rem">
                John Doe
              </Text>
              <Text>Email</Text>
              <Text fontWeight="bold">johndoe@gmail.com</Text>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            borderRadius="md"
            p="1rem"
            // w="320px"
            h="255px"
          >
            <Text fontSize="xs" textColor="text-default">
              YOUR TIER
            </Text>
            <Flex direction="column" my="1rem">
              <Text fontSize="xl" textColor="text-default" textAlign="center">
                BASIC
              </Text>
              <Text
                fontSize="4xl"
                fontWeight="700"
                textColor="text-default"
                textAlign="center"
              >
                0.2GB
              </Text>
            </Flex>
            <Flex direction="column" gap="1rem">
              <Button size="sm" variant="primary">
                Upgrade
              </Button>
              <Button size="sm" variant="secondary">
                See why we offer multiple tiers
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Grid gap="1rem" templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}>
          <GridItem colSpan="2">
            <Flex
              direction="column"
              border="1px"
              borderColor="mobile-nav-active"
              borderRadius="md"
              p="1rem"
              // w="320px"
              h="255px"
            >
              <Text fontSize="xs" textColor="text-default">
                USED STORAGE
              </Text>
              <Flex justify="center" gap="4rem">
                <Flex direction="column" my="1rem">
                  <Text
                    fontSize="3xl"
                    fontWeight="700"
                    textColor="text-default"
                    textAlign="center"
                  >
                    0.05GB
                  </Text>
                  <Text fontSize="sm" textColor="text-default">
                    Used Storage
                  </Text>
                </Flex>
                <Flex direction="column" my="1rem">
                  <Text
                    fontSize="3xl"
                    fontWeight="700"
                    textColor="text-default"
                    textAlign="center"
                  >
                    0.15GB
                  </Text>
                  <Text fontSize="sm" textColor="text-default">
                    Free Storage
                  </Text>
                </Flex>
              </Flex>
              <Progress
                value={10}
                mt="2rem"
                height="25px"
                colorScheme="text-default"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              direction="column"
              border="1px"
              borderColor="mobile-nav-active"
              borderRadius="md"
              p="1rem"
              // w="320px"
              h="255px"
            >
              <Text fontSize="xs" textColor="text-default">
                YOUR BOOKS
              </Text>
              <Flex direction="column" my="auto">
                <Text
                  fontSize="3xl"
                  textColor="text-default"
                  textAlign="center"
                >
                  6
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="700"
                  textColor="text-default"
                  textAlign="center"
                >
                  Books in your library
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
