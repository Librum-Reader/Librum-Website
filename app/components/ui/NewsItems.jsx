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
            display={{ base: "none", md: "block" }}
          />
          <VStack direction="column" spacing={2} align="flex-start">
            <Heading size="lg" color="#946bde">
              {props.title}
            </Heading>
            <Text color="red" fontWeight="bold" pl=".5rem">
              {props.date}
            </Text>
            <Text color="text-default">{props.body}</Text>
            <Button mt={2} alignSelf="self-start" variant="primary">
              Read More
            </Button>
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default NewsItems;
