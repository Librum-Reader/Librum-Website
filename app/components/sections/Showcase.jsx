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
import DownloadButton from "../ui/DownloadButton";
import ShowcaseAnimation from "../ui/ShowcaseAnimation";
import { isValidMotionProp, motion } from "framer-motion";
import { PiGithubLogo } from "react-icons/pi";
import Link from "next/link";

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
    <Flex direction="column" align="center" w="100%">
      <Flex
        align="center"
        px="4rem"
        pt={{ base: "4rem", md: "0" }}
        pb={{ base: "4rem", md: "0" }}
      >
        <ChakraBox
          align="flex-start"
          spacing={4}
          w={{ base: "100%", md: "50%" }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Heading size="2xl" pb="1rem">
            A Simple and Free E-Book Reader
          </Heading>
          <Text fontSize="xl" textColor="white" fontWeight="700">
            A clean and simple way to read your books on any device and build
            your own online library
          </Text>
          <VStack
            align={{ base: "center", md: "flex-start" }}
            mt="2rem"
            spacing="6"
            mb="2rem"
          >
            <DownloadButton />
            <Link href="https://github.com/Librum-Reader/Librum" target="#">
              <Button
                w="250px"
                variant="showcase"
                leftIcon={<PiGithubLogo size={18} />}
              >
                GitHub
              </Button>
            </Link>
          </VStack>
        </ChakraBox>
        <Box w="50%" align="right" display={{ base: "none", md: "flex" }}>
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
