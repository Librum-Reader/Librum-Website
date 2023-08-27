"use client";

import React from "react";
import { Flex, Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { createClient } from "next-sanity";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";

const Posts = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const client = createClient({
    projectId: "46vwrypj",
    dataset: "production",
    apiVersion: "2023-08-27",
    useCdn: false,
  });

  const fetchPost = async () => {
    const query = `*[_id == $postId][0] | {
        _id,
        title,
        publishedAt,
        'slug': slug.current,
        body,
        summary
      }`;
    const params = { postId };

    try {
      const posts = await client.fetch(query, params);
      return posts;
    } catch {
      console.error("Error retrieving posts.");
    }
  };
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchedPost = fetchPost();
    fetchedPost.then((post) => {
      setPost(post);
      console.log(post.body);
    });
  }, []);

  return (
    <Flex background="bg-default" align="center" direction="column">
      <Box>
        <Heading
          size="2xl"
          color="#946bde"
          mt={{ base: "2rem", md: "24" }}
          mb={{ base: "2rem", md: "24" }}
        >
          {post?.title}
        </Heading>
      </Box>
      <VStack spacing={8} mb={8}>
        <Text>
          <PortableText value={post?.body} />
        </Text>
      </VStack>
    </Flex>
  );
};

export default Posts;
