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
      title: "Simple",
      text: "Focus on what actually matters, using a simple and straight forward interface. Your time is too valuable to be wasted on badly designed applications.",
      image: "/screenshots/reading_dark.png",
    },
    {
      title: "Your Own Library",
      text: "Create your own personalized online library that you can access from any device, anytime, anywhere. Librum automatically saves everything you need to the cloud.",
      image: "/screenshots/library_dark.png",
    },
    {
      title: "Fully Customizable",
      text: "Customize Librum to make it look and feel the way you want it to. No app is perfect for everyone right away, but we make it possible for you to make it perfect.",
      image: "/screenshots/settings_dark.png",
    },
  ];

  return (
    <>
      {data.map((block, index) => {
        return (
          <FeaturesAnimate key={index}>
            <Flex
              mx="auto"
              gap="20rem"
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              align="center"
              key={index}
              mt="-5rem"
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
