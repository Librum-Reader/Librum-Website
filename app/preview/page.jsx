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
import SanityVideo from "../components/blog/SanityVideo";

const Posts = () => {
  const API_KEY = process.env.NEXT_PUBLIC_SANITY_API;
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
      const query = encodeURIComponent(`*[_id=='${id}']{
        _id,
        title,
        publishedAt,
        body,
        author->{
          _id,
          name,
          image
        },
        "authorImg": author -> image.asset -> url,
        "heroImageUrl": heroImage.asset -> url

      }`);
      try {
        const response = await fetch(
          `https://46vwrypj.api.sanity.io/v2023-08-27/data/query/production?query=${query}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
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
          <Heading size={{ base: "xl", md: "2xl" }} color="#946bde">
            {children}
          </Heading>
        );
      },
      h2: ({ children }) => {
        return (
          <Heading size={{ base: "lg", md: "xl" }} color="#946bde">
            {children}
          </Heading>
        );
      },
      h3: ({ children }) => {
        return (
          <Heading size={{ base: "md", md: "lg" }} color="#946bde">
            {children}
          </Heading>
        );
      },
    },
  };

  return (
    <Flex
      background="bg-default"
      align="center"
      direction="column"
      w="100%"
      maxW="975px"
      mx="auto"
      p="1rem"
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
            {data?.result[0].author.name}
          </Text>
        </Flex>
        <Text>
          {new Date(data?.result[0].publishedAt).toDateString().slice(4)}
        </Text>
      </Flex>
      <VStack spacing={8} mb={8} maxW="1300px">
        {data?.result[0].heroImageUrl ? (
          <Image
            src={data?.result[0].heroImageUrl}
            boxSize="150px"
            display={{ base: "none", md: "block" }}
            objectFit="cover"
          />
        ) : (
          <Text fontWeight="semibold">
            [No hero image selected. This warning will not show up in the
            published post.]
          </Text>
        )}
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
