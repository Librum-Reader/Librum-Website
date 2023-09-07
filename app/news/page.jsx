"use client";
import { Flex, Box, Heading, Text, VStack, Spinner } from "@chakra-ui/react";
import NewsItems from "../components/ui/NewsItems";
import { createClient } from "next-sanity";
import { useState, useEffect } from "react";
import "../globals.css";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);

  const client = createClient({
    projectId: "46vwrypj",
    dataset: "production",
    apiVersion: "2023-08-27",
    useCdn: false,
  });

  const fetchPosts = async () => {
    const query = `*[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      publishedAt,
      'slug': slug.current,
      body,
      mainImage,
      summary,
      "imageUrl": mainImage.asset -> url,
      "heroImageUrl": heroImage.asset -> url
    }`;

    try {
      const posts = await client.fetch(query);
      return posts;
    } catch {
      console.error("Error retrieving posts.");
    }
  };
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    const fetchedPosts = fetchPosts();
    console.log("LOADING", isLoading);
    fetchedPosts.then((posts) => {
      setPostArray(posts);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Flex h="100dvh" direction="column">
        <Flex background="bg-default" align="center" direction="column">
          <Box>
            <Heading
              size="2xl"
              color="#946bde"
              mt={{ base: "2rem", md: "2rem" }}
            >
              News and Updates
            </Heading>
          </Box>
        </Flex>
        <Flex w="100%" h="100%" my="auto" align="center" justify="center">
          <Spinner />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex background="bg-default" align="center" direction="column">
      <Box>
        <Heading
          size="2xl"
          color="#946bde"
          mt={{ base: "2rem", md: "2rem" }}
          mb={{ base: "2rem", md: "2rem" }}
        >
          News and Updates
        </Heading>
      </Box>
      <VStack spacing={8} mb={8}>
        <Text>
          {postArray.map((post, index) => {
            // if (isLoading === true) {
            //   return (
            //     <Flex
            //       background="user-profile-bg"
            //       border="1px"
            //       borderColor="user-profile-border"
            //       borderRadius="md"
            //       p={{ base: "1rem", md: "2rem" }}
            //       direction={{ base: "column", md: "row" }}
            //       mb="3.5rem"
            //       // w="320px"
            //       // h="255px"
            //     >
            //       <Flex maxW="1300px" w="100%" gap="4rem" align="center">
            //         <Spinner />
            //       </Flex>
            //     </Flex>
            //   );
            // } else {
            return (
              <NewsItems
                key={index}
                title={post.title}
                date={new Date(post.publishedAt).toDateString().slice(4)}
                summary={post.summary}
                id={post._id}
                body="test"
                image={post.imageUrl}
                loading={isLoading}
              />
            );
          })}
        </Text>
      </VStack>
    </Flex>
  );
};

export default News;
