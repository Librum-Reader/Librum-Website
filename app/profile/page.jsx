"use client";

import { useRouter } from "next/navigation";

import { Flex, VStack, Heading, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
    setToken(token);
  }, [token]);

  return (
    <Flex background="#282c34" align="center" direction="column">
      <Box>
        <Heading size="2xl" color="#946bde" mt={24} mb={24}>
          User Profile
        </Heading>
      </Box>
      <VStack spacing={8} mb={8}>
        Hello
      </VStack>
    </Flex>
  );
};

export default UserProfile;
