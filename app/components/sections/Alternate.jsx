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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FeaturesAnimate from "../ui/FeaturesAnimate";
import FeaturesAnimateMobile from "../ui/FeaturesAnimateMobile";
import MobileFeatureCard from "../ui/MobileFeatureCard";
import ReactPlayer from "react-player";

const Alternate = () => {
  const { colorMode } = useColorMode();

  const videoUrl =
    colorMode === "dark" ? "/videos/ai-dark.mp4" : "/videos/ai-light.mp4";

  const evenAlternateBackground = useColorModeValue("gray.50", "#3c4047");
  const oddAlternateBackground = useColorModeValue("gray.200", "#282c34");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onClose: onVideoClose,
  } = useDisclosure();

  const [modalData, setModalData] = useState("");

  const data = [
    {
      title: "Build Your Library",
      text: "Create your own personalized online library that you can access from any device, anytime, anywhere.",
      text2: "Librum automatically saves everything you need to the cloud.",
      text_mobile:
        "Create your own personalized online library that you can access from any device, anytime, anywhere.",
      image: "/screenshots/library_dark.png",
      image_light: "/screenshots/library_light.png",
    },
    {
      title: "Ai Integration",
      text: "Make use of advanced Artificial Intelligence in just two clicks.",
      text2:
        "Use it to explain, summarize or give you more information on any text within your book.",
      text_mobile:
        "Make use of advanced Artificial Intelligence in just two clicks.",
      image: "/screenshots/explanation_dark.png",
      image_light: "/screenshots/explanation_light.png",
    },
    {
      title: "Simplicity",
      text: "Focus on what actually matters, using a simple and straight forward interface.",
      text2: "Your time is too valuable to be wasted on complex applications.",
      text_mobile:
        "Focus on what actually matters, using a simple and straight forward interface.",
      image: "/screenshots/reading_dark.png",
      image_light: "/screenshots/reading_light.png",
    },
    {
      title: "Fully Customizable",
      text: "Customize Librum to make it look and feel the way you want it to. No app is perfect for everyone right away, but we make it possible for you to make it perfect.",
      text_mobile: "Customize Librum to make it look and feel the way you want it to.",
      image: "/screenshots/settings_dark.png",
      image_light: "/screenshots/settings_light.png",
    },
  ];

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton />
          <ModalHeader></ModalHeader> */}
          {/* <ModalBody> */}
          <Flex
            alignSelf="center"
            background="bg-default"
            padding="1rem"
            borderRadius="lg"
            w={{ base: "100%", md: "1400px" }}
          >
            <Image src={modalData} className="modal-img" />
          </Flex>
          {/* </ModalBody> */}
        </ModalContent>
      </Modal>
      <Modal isOpen={isVideoOpen} onClose={onVideoClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Flex
            alignSelf="center"
            background="bg-default"
            padding="1rem"
            borderRadius="lg"
            w={{ base: "100%", md: "1400px" }}
          >
            <ReactPlayer
              url={videoUrl}
              volume={0}
              muted={true}
              controls={true}
              playing={true}
              loop={true}
              height="100%"
              width="100%"
            />
          </Flex>
          {/* </ModalBody> */}
        </ModalContent>
      </Modal>
      {data.map((block, index) => {
        return (
          // <FeaturesAnimateMobile key={index}>
          <MobileFeatureCard
            key={index}
            title={block.title}
            text={block.text_mobile}
            image_light={block.image_light}
            image={block.image}
            bg={
              index % 2 === 0 ? evenAlternateBackground : oddAlternateBackground
            }
          />
          // </FeaturesAnimateMobile>
        );
      })}
      {data.map((block, index) => {
        return (
          // <FeaturesAnimate key={index}>
          <Flex
            // mx="auto"
            key={index}
            display={{ base: "none", md: "flex" }}
            gap={{ base: "2rem", md: "15rem" }}
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            align="center"
          >
            <Card flexBasis="fit-content">
              <CardBody p="1rem">
                {block.title === "Ai Integration" ? (
                  <ReactPlayer
                    url={videoUrl}
                    volume={0}
                    muted={true}
                    playing={true}
                    loop={true}
                    height="100%"
                    width="100%"
                    onClick={() => {
                      onVideoOpen();
                    }}
                  />
                ) : (
                  <Image
                    src={colorMode === "dark" ? block.image : block.image_light}
                    className={
                      index % 2 === 0
                        ? "features-img shadow-left"
                        : "features-img shadow-right"
                    }
                    alt="Illustration"
                    onClick={() => {
                      setModalData(block.image);
                      onOpen();
                    }}
                  ></Image>
                )}
              </CardBody>
            </Card>

            <Flex
              direction="column"
              align={{ base: "center", md: "flex-start" }}
              flexBasis="70%"
            >
              <Heading color="#946bde" mb="1.5rem">
                {block.title}
              </Heading>
              <Text
                color="text-default"
                textAlign={{ base: "center", md: "left" }}
              >
                {block.text}
              </Text>
              {block.text2 ? (
                <Text
                  color="text-default"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {block.text2}
                </Text>
              ) : null}
            </Flex>
          </Flex>
          // </FeaturesAnimate>
        );
      })}
    </>
  );
};

export default Alternate;
