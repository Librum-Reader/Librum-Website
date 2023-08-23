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
    <Flex background="bg-default" h="100vh" w="100%" px="9rem" justify="center">
      <Grid gap="1rem" templateColumns="1fr 1fr 1fr">
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
          <Flex justify="center" gap="1.5rem">
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
            <Text fontSize="3xl" textColor="text-default" textAlign="center">
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
      </Grid>
      {/* //   <Box w="70%" mt="2rem">
    //     <Tabs>
    //       <TabList>
    //         <Tab>
    //           <Flex>
    //             <AiOutlineUser color="#47478f" />
    //             <Text fontSize="sm" ml=".5rem" textColor="text-default">
    //               Account
    //             </Text>
    //           </Flex>
    //         </Tab>
    //         <Tab>
    //           <Flex>
    //             <AiOutlineCloudServer color="#47478f" />{" "}
    //             <Text fontSize="sm" ml=".5rem" textColor="text-default">
    //               Storage
    //             </Text>
    //           </Flex>
    //         </Tab>
    //         <Tab>
    //           <Flex>
    //             <AiFillHeart color="#47478f" />{" "}
    //             <Text fontSize="sm" ml=".5rem" textColor="text-default">
    //               Support us
    //             </Text>
    //           </Flex>
    //         </Tab>
    //       </TabList>

    //       <TabPanels>
    //         <TabPanel>
    //           <p>one!</p>
    //         </TabPanel>
    //         <TabPanel>
    //           <Flex direction="column" gap="1rem">
    //             <Flex gap="1rem">
    //               <Card w="30%" borderRadius="sm">
    //                 <CardHeader>
    //                   <Text fontSize="xs" textColor="text-default">
    //                     YOUR TIER
    //                   </Text>
    //                 </CardHeader>
    //                 <CardBody>
    //                   <Flex direction="column" align="center">
    //                     <Text fontSize="xl" textColor="text-default">
    //                       BASIC
    //                     </Text>
    //                     <Text
    //                       fontSize="4xl"
    //                       fontWeight="700"
    //                       textColor="text-default"
    //                     >
    //                       0.2GB
    //                     </Text>
    //                     <Flex padding="5px" gap=".5rem" mt="1rem">
    //                       <Button size="sm" variant="primary">
    //                         Upgrade
    //                       </Button>
    //                       <Button size="sm" variant="secondary">
    //                         See why we offer multiple tiers
    //                       </Button>
    //                     </Flex>
    //                   </Flex>
    //                 </CardBody>
    //               </Card>
    //              
    //             </Flex>
    //             <Flex gap="1rem">
    //              
    //               {/* Empty flex container to space things out properly */}
      {/* //               <Flex w="70%"></Flex>
    //             </Flex> */}
      {/* //           </Flex> */}
      {/* //         </TabPanel>
    //         <TabPanel>
    //           <p>three!</p>
    //         </TabPanel>
    //       </TabPanels>
    //     </Tabs>
    //   </Box> */}
    </Flex>
  );
};

export default UserProfile;
