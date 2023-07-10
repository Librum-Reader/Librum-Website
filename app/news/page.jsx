"use client";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import NewsItems from "../components/NewsItems";

const News = () => {
  return (
    <Flex background="#282c34" align="center" direction="column" h="100vh">
      <Box maxW="1300px" align="center">
        <Heading color="#946bde" mt="10rem" mb="2rem">
          News and Updates
        </Heading>
      </Box>
      <NewsItems />
    </Flex>
  );
};

export default News;
