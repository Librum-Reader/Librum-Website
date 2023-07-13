"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

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

const UserProfile = () => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.user.value);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
    setToken(token);
  }, [token]);

  return (
    <Flex background="#282c34" align="center" direction="column" h="100vh">
      <Box w="70%" mt="2rem">
        <Tabs>
          <TabList>
            <Tab>
              <AiOutlineUser color="white" />{" "}
              <Text fontSize="sm" ml=".5rem" textColor="white">
                Account
              </Text>
            </Tab>
            <Tab>
              <AiOutlineCloudServer color="white" />{" "}
              <Text fontSize="sm" ml=".5rem" textColor="white">
                Storage
              </Text>
            </Tab>
            <Tab>
              <AiFillHeart color="white" />{" "}
              <Text fontSize="sm" ml=".5rem" textColor="white">
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
                  <Card w="30%">
                    <CardHeader>
                      <Text fontSize="xs">YOUR TIER</Text>
                    </CardHeader>
                    <CardBody>
                      <Flex direction="column" align="center">
                        <Text fontSize="xl">BASIC</Text>
                        <Text fontSize="4xl" fontWeight="700">
                          0.2GB
                        </Text>
                        <Flex padding="5px" gap=".5rem" mt="1rem">
                          <Button size="sm">Upgrade</Button>
                          <Button size="sm" variant="outline">
                            See why we offer multiple tiers
                          </Button>
                        </Flex>
                      </Flex>
                    </CardBody>
                  </Card>
                  <Card w="70%">
                    <CardHeader>
                      <Text fontSize="xs">USED STORAGE</Text>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <Flex direction="column" width="100%" align="center">
                          <Text fontSize="4xl" fontWeight="700">
                            0.05GB
                          </Text>
                          <Text fontSize="sm">Used Storage</Text>
                        </Flex>
                        <Flex direction="column" width="100%" align="center">
                          <Text fontSize="4xl" fontWeight="700">
                            0.2GB
                          </Text>
                          <Text fontSize="sm">Remaining Storage</Text>
                        </Flex>
                      </Flex>
                      <Progress value={10} mt="2rem" height="25px" />
                    </CardBody>
                  </Card>
                </Flex>
                <Flex gap="1rem">
                  <Card w="30%">
                    <CardHeader>
                      <Text fontSize="xs">YOUR BOOKS</Text>
                    </CardHeader>
                    <CardBody>
                      <Flex direction="column" align="center">
                        <Text fontSize="4xl" fontWeight="700">
                          6
                        </Text>
                        <Text fontSize="sm">Books in your Library</Text>
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
