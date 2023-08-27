"use client";
import { Flex, Box, Heading, Text, VStack } from "@chakra-ui/react";
import NewsItems from "../components/ui/NewsItems";
import { createClient } from "next-sanity";
import { useState, useEffect } from "react";

const News = () => {
  const client = createClient({
    projectId: "46vwrypj",
    dataset: "production",
    apiVersion: "2023-08-27",
    useCdn: false,
  });

  const fetchPosts = async () => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      publishedAt,
      'slug': slug.current,
      body,
      summary
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
    fetchedPosts.then((posts) => {
      setPostArray(posts);
    });
  }, []);

  console.log(postArray);

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
        <Text>
          {postArray.map((post) => {
            return (
              <NewsItems
                title={post.title}
                date={post.publishedAt}
                summary={post.summary}
                id={post._id}
                body="test"
              />
            );
          })}
        </Text>
      </VStack>
    </Flex>
  );
};

export default News;
