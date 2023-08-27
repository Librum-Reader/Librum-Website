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
    <Card
      bgColor="bg-default"
      borderRadius="sm"
      mx={{ base: "1rem", md: "none" }}
    >
      <CardBody>
        <Flex maxW="1300px" gap="4rem" align="center">
          <Image
            alt="news item illustration"
            src="/news/news.svg"
            className="news-image"
            boxSize="50px"
            display={{ base: "none", md: "block" }}
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
      </CardBody>
    </Card>
  );
};

export default NewsItems;
