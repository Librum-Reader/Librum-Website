"use client";
import {
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  Card,
  CardBody,
  Box,
} from "@chakra-ui/react";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import FeaturesAnimate from "../ui/FeaturesAnimate";

const Alternate = () => {
  const data = [
    {
      title: "Available Everywhere",
      text: "Read on any device, anytime, anywhere. Librum installs in just two clicks, and is designed to run on any device and operating system, no matter if its your phone, tablet, PC, or laptop",
      image: "/screenshots/login-light.png",
    },
    {
      title: "Simple",
      text: "Your books are automatically synced to the cloud, so you can access them at any time through a simple and modern interface",
      image: "/screenshots/simple-light.png",
    },
    {
      title: "Powerful and Secure",
      text: "Librum offers lightning-fast performance, small file-size, quick updates, the ability to customize the application to make it look and feel as you want, and many tools to boost your productivity",
      image: "/screenshots/customize-dark.png",
    },
    {
      title: "Free Books",
      text: "Explore our free online store with access to over 60,000 books. Download books in just 2 clicks and start enjoying your reading journey right away",
      image: "/screenshots/library-light.png",
    },
  ];

  return (
    <>
      {data.map((block, index) => {
        return (
          <FeaturesAnimate key={index}>
            <Flex
              mx="auto"
              gap="10rem"
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              align="center"
              key={index}
            >
              <Card>
                <CardBody p="1rem">
                  <Image
                    src={block.image}
                    className={
                      index % 2 === 0
                        ? "features-img shadow-left"
                        : "features-img shadow-right"
                    }
                    alt="Illustration"
                  />
                </CardBody>
              </Card>

              <VStack spacing={6} align="flex-start">
                <Heading color="#946bde">{block.title}</Heading>
                <Text color="text-default">{block.text}</Text>
              </VStack>
            </Flex>
          </FeaturesAnimate>
        );
      })}
    </>
  );
};

export default Alternate;
