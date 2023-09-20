"use client";
import {
  Flex,
  Heading,
  Image,
  Text,
  Button,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";

import Link from "next/link";

const NewsItems = (props) => {
  return (
    <Flex
      background="user-profile-bg"
      border="1px"
      borderColor="user-profile-border"
      borderRadius="md"
      p={{ base: "1rem", md: "2rem" }}
      direction={{ base: "column", md: "row" }}
      mb="2rem"
      // w="320px"
      // h="255px"
    >
      <Flex maxW="1300px" gap="4rem" align="center">
        <Image
          alt="news item illustration"
          src={props.image}
          className="news-image"
          boxSize="160px"
          display={{ base: "none", md: "block" }}
          objectFit="cover"
        />
        <VStack direction="column" spacing={2} align="flex-start">
          <Heading size="lg" color="#946bde">
            {props.title}
          </Heading>
          <Text color="red" fontWeight="bold" pl=".5rem">
            {props.date}
          </Text>
          <Text color="text-default">{props.summary}</Text>
          <Link href={`/posts?id=${props.id}`}>
            <Button mt={2} alignSelf="self-start" variant="primary">
              Read More
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default NewsItems;
