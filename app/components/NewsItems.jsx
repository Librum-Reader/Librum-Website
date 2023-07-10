"use client";
import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

const NewsItems = () => {
  return (
    <Flex maxW="1300px" gap="4rem" align="center">
      <Image src="/news/news.svg" className="news-image" />
      <Flex direction="column" gap="1rem">
        <Heading as="h2" color="#946bde">
          Welcome to the Librum-Reading Blog
        </Heading>
        <Text color="red" fontWeight="bold">
          October 25 2022
        </Text>
        <Text color="white">
          Welcome to our blog page. Here you will find the latest news and
          updates for Librum-Reader. If you would like to share an article or
          announce an event you are organizing, feel free to contact us.
        </Text>
        <Button alignSelf="self-start">Read More</Button>
      </Flex>
    </Flex>
  );
};

export default NewsItems;
