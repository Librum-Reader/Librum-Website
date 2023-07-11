"use client";
import { Flex, VStack, Heading, Box } from "@chakra-ui/react";

const UserProfile = () => {
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
