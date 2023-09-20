"use client";

import React from "react";
import {
  Flex,
  Box,
  Heading,
  VStack,
  Text,
  Image,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { createClient } from "next-sanity";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "../components/blog/SanityImage";
import SanityVideo from "../components/blog/SanityImage";

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
        summary,
        "author": author -> name,
        "authorImg": author -> image.asset -> url,
        "heroImageUrl": heroImage.asset -> url
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
      console.log(post);
    });
  }, []);

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
        return <SanityImage {...value} />;
      },
      video: ({ value }) => {
        return <SanityVideo {...value} />;
      },
    },
    block: {
      p: ({ children }) => {
        return <Text mb="1rem">{children}</Text>;
      },
      h1: ({ children }) => {
        return (
          <Heading size={{ base: "lg", md: "xl" }} color="#946bde">
            {children}
          </Heading>
        );
      },
      h2: ({ children }) => {
        return (
          <Heading size={{ base: "md", md: "lg" }} color="#946bde">
            {children}
          </Heading>
        );
      },
    },
  };

  console.log(post?.body);

  return (
    <Flex
      background="bg-default"
      align="center"
      direction="column"
      maxW="975px"
      mx="auto"
      px={{ base: "1rem", md: "0" }}
    >
      <Box textAlign="center">
        <Heading size={{ base: "xl", md: "2xl" }} color="#946bde" mt="2rem">
          {post?.title}
        </Heading>
      </Box>
      <Divider mt="2rem" mb="2rem" />
      <Flex
        alignSelf="start"
        align="center"
        justify="space-between"
        w="100%"
        mb="2rem"
      >
        <Flex align="center" gap="1rem">
          <Avatar
            src={post?.authorImg}
            boxSize={{ base: "35px", md: "48px" }}
          />
          <Text fontSize={{ base: "1rem", md: "1.5rem" }} fontWeight="bold">
            {post?.author}
          </Text>
        </Flex>
        <Text fontSize={{ base: ".8rem", md: "1rem" }}>
          {new Date(post?.publishedAt).toDateString().slice(4)}
        </Text>
      </Flex>
      <VStack spacing={8} mb={8} maxW="1300px">
        {/* <Image
          src={post?.heroImageUrl}
          boxSize="150px"
          display={{ base: "none", md: "block" }}
          objectFit="cover"
        /> */}
        <Text>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </Text>
      </VStack>
    </Flex>
  );
};

export default Posts;
