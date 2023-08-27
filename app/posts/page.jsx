"use client";

import React from "react";
import { Flex, Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

const Posts = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  return (
    <Flex background="bg-default" align="center" direction="column">
      <Box>
        <Heading
          size="2xl"
          color="#946bde"
          mt={{ base: "2rem", md: "24" }}
          mb={{ base: "2rem", md: "24" }}
        >
          News and Updates
        </Heading>
      </Box>
      <VStack spacing={8} mb={8}>
        <Text>{postId}</Text>
      </VStack>
    </Flex>
  );
};

export default Posts;
