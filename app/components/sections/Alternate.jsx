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
} from "@chakra-ui/react";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FeaturesAnimate from "../ui/FeaturesAnimate";
import MobileFeatureCard from "../ui/MobileFeatureCard";

const Alternate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState("");

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
            w="1400px"
          >
            <Image src={modalData} className="modal-img" />
          </Flex>
          {/* </ModalBody> */}
        </ModalContent>
      </Modal>
      <MobileFeatureCard />
      {data.map((block, index) => {
        return (
          <FeaturesAnimate key={index}>
            <Flex
              // mx="auto"
              gap={{ base: "2rem", md: "15rem" }}
              direction={{
                base: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }}
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
                    onClick={() => {
                      setModalData(block.image);
                      onOpen();
                    }}
                  />
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
          </FeaturesAnimate>
        );
      })}
    </>
  );
};

export default Alternate;
