"use client";
import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

const NewsItems = (props) => {
  return (
    <Flex maxW="1300px" gap="4rem" align="center" mb="4rem">
      <Image src="/news/news.svg" className="news-image" />
      <Flex direction="column" gap="1rem">
        <Heading as="h3" size="lg" color="#946bde">
          {props.title}
        </Heading>
        <Text color="red" fontWeight="bold">
          {props.date}
        </Text>
        <Text color="white">{props.body}</Text>
        <Button alignSelf="self-start">Read More</Button>
      </Flex>
    </Flex>
  );
};

export default NewsItems;
