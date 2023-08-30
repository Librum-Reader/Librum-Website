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

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { createClient } from "next-sanity";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "../components/blog/SanityImage";

const Posts = () => {
  const API_KEY = process.env.SANITY_API;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const client = createClient({
    projectId: "46vwrypj",
    dataset: "production",
    apiVersion: "2023-08-27",
    useCdn: false,
  });

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const id = searchParams.get("id");
      const query = encodeURIComponent(`*[_id=='${id}']`);
      try {
        const response = await fetch(
          `https://46vwrypj.api.sanity.io/v2023-08-27/data/query/production?query=${query}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer`,
            },
            method: "GET",
          }
        );

        const result = await response.json();
        console.log(result);

        return result;
      } catch {
        console.log("error");
      }
    },
    queryKey: ["preview_post"],
  });

  console.log("query data", data?.result[0]);

  // const [post, setPost] = useState();

  // useEffect(() => {
  //   const fetchedPost = fetchPost();
  //   fetchedPost.then((post) => {
  //     setPost(post);
  //     console.log(post);
  //   });
  // }, []);

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
        return <SanityImage {...value} />;
      },
    },
    block: {
      p: ({ children }) => {
        return <Text mb="1rem">{children}</Text>;
      },
    },
  };

  return (
    <Flex
      background="bg-default"
      align="center"
      direction="column"
      maxW="975px"
      mx="auto"
    >
      <Box>
        <Heading size="2xl" color="#946bde" mt="2rem">
          {data?.result[0].title}
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
          <Avatar src={data?.result[0].authorImg} />
          <Text fontSize="1.5rem" fontWeight="bold">
            {/* {data?.result[0].author} */}
          </Text>
        </Flex>
        {/* <Text>{new Date(post?.publishedAt).toDateString().slice(4)}</Text> */}
      </Flex>
      <VStack spacing={8} mb={8} maxW="1300px">
        <Image
          src={data?.result.heroImageUrl}
          boxSize="150px"
          display={{ base: "none", md: "block" }}
          objectFit="cover"
        />
        <Text>
          <PortableText
            value={data?.result[0].body}
            components={myPortableTextComponents}
          />
        </Text>
      </VStack>
    </Flex>
  );
};

export default Posts;
