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
  }, [token]);

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
    <Flex background="bg-default" align="center" direction="column" h="100vh">
      <Box w="70%" mt="2rem">
        <Tabs>
          <TabList>
            <Tab>
              <AiOutlineUser color="#47478f" />{" "}
              <Text fontSize="sm" ml=".5rem" textColor="text-default">
                Account
              </Text>
            </Tab>
            <Tab>
              <AiOutlineCloudServer color="white" />{" "}
              <Text fontSize="sm" ml=".5rem" textColor="text-default">
                Storage
              </Text>
            </Tab>
            <Tab>
              <AiFillHeart color="text-default" />{" "}
              <Text fontSize="sm" ml=".5rem" textColor="text-default">
                Support us
              </Text>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <Flex direction="column" gap="1rem">
                <Flex gap="1rem">
                  <Card w="30%" borderRadius="sm">
                    <CardHeader>
                      <Text fontSize="xs" textColor="text-default">
                        YOUR TIER
                      </Text>
                    </CardHeader>
                    <CardBody>
                      <Flex direction="column" align="center">
                        <Text fontSize="xl" textColor="text-default">
                          BASIC
                        </Text>
                        <Text
                          fontSize="4xl"
                          fontWeight="700"
                          textColor="text-default"
                        >
                          0.2GB
                        </Text>
                        <Flex padding="5px" gap=".5rem" mt="1rem">
                          <Button size="sm" variant="primary">
                            Upgrade
                          </Button>
                          <Button size="sm" variant="secondary">
                            See why we offer multiple tiers
                          </Button>
                        </Flex>
                      </Flex>
                    </CardBody>
                  </Card>
                  <Card w="70%" borderRadius="sm">
                    <CardHeader>
                      <Text fontSize="xs" textColor="text-default">
                        USED STORAGE
                      </Text>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <Flex direction="column" width="100%" align="center">
                          <Text
                            fontSize="4xl"
                            fontWeight="700"
                            textColor="text-default"
                          >
                            0.05GB
                          </Text>
                          <Text fontSize="sm" textColor="text-default">
                            Used Storage
                          </Text>
                        </Flex>
                        <Flex direction="column" width="100%" align="center">
                          <Text
                            fontSize="4xl"
                            fontWeight="700"
                            textColor="text-default"
                          >
                            0.2GB
                          </Text>
                          <Text fontSize="sm" textColor="text-default">
                            Remaining Storage
                          </Text>
                        </Flex>
                      </Flex>
                      <Progress
                        value={10}
                        mt="2rem"
                        height="25px"
                        colorScheme="text-default"
                      />
                    </CardBody>
                  </Card>
                </Flex>
                <Flex gap="1rem">
                  <Card w="30%" borderRadius="sm">
                    <CardHeader>
                      <Text fontSize="xs" textColor="text-default">
                        YOUR BOOKS
                      </Text>
                    </CardHeader>
                    <CardBody>
                      <Flex direction="column" align="center">
                        <Text
                          fontSize="4xl"
                          fontWeight="700"
                          textColor="text-default"
                        >
                          6
                        </Text>
                        <Text fontSize="sm" textColor="text-default">
                          Books in your Library
                        </Text>
                      </Flex>
                    </CardBody>
                  </Card>
                  {/* Empty flex container to space things out properly */}
                  <Flex w="70%"></Flex>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default UserProfile;
