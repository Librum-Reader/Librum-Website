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
          mt={{ base: "2rem", md: "2rem" }}
          mb={{ base: "2rem", md: "2rem" }}
        >
          News and Updates
        </Heading>
      </Box>
      <VStack spacing={8} mb={8}>
        <Text>
          {postArray.map((post, index) => {
            return (
              <NewsItems
                key={index}
                title={post.title}
                date={new Date(post.publishedAt).toDateString().slice(4)}
                summary={post.summary}
                id={post._id}
                body="test"
                image={post.imageUrl}
              />
            );
          })}
        </Text>
      </VStack>
    </Flex>
  );
};

export default News;
