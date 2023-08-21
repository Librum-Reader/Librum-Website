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
      text: "Focus on what actually matters, using a simple and straight forward interface.",
      text2:
        "Your time is too valuable to be wasted on badly designed applications.",
      image: "/screenshots/reading_dark.png",
    },
    {
      title: "Your Own Library",
      text: "Create your own personalized online library that you can access from any device, anytime, anywhere.",
      text2: "Librum automatically saves everything you need to the cloud.",
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
              // mx="auto"
              gap="17rem"
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              align="center"
              key={index}
            >
              <Card flexBasis="fit-content">
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

              <Flex direction="column" align="flex-start" flexBasis="70%">
                <Heading color="#946bde" mb="1.5rem">
                  {block.title}
                </Heading>
                <Text color="text-default">{block.text}</Text>
                {block.text2 ? (
                  <Text color="text-default">{block.text2}</Text>
                ) : null}
              </Flex>
            </Flex>
          </FeaturesAnimate>
        );
      })}
    </>
  );
};

export default Alternate;
