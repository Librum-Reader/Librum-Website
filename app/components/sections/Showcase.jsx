"use client";
import "../../globals.css";
import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  VStack,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import Lottie from "lottie-web";
import Features from "./Features";
import ShowcaseAnimation from "../ui/ShowcaseAnimation";
import { isValidMotionProp, motion } from "framer-motion";

const Showcase = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      animationData: require("./reading.json"),
    });
  }, []);

  const ChakraBox = motion(Box);

  return (
    <Flex direction="column" align="center">
      <Flex align="center" maxW="1300px">
        <ChakraBox
          align="flex-start"
          spacing={4}
          w="50%"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Heading size="2xl">A Simple and Free E-Book Reader</Heading>
          <Text fontSize="xl" textColor="white">
            A clean and simple way to read your books on any device and build
            your own online library
          </Text>
          <VStack align="flex-start" mt="2rem" spacing="6">
            <Button w="250px" variant="primary">
              Download
            </Button>
            <Button w="250px" variant="showcase">
              GitHub
            </Button>
          </VStack>
        </ChakraBox>
        <Box w="50%">
          {/* <ShowcaseAnimation /> */}
          <div className="image lg" ref={container}>
            {/* <img src={image1} alt="" /> */}
          </div>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Showcase;
