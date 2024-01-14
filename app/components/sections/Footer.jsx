import React from "react";
import {
  Flex,
  Input,
  Textarea,
  FormLabel,
  VStack,
  Heading,
  Button,
  Image,
  Text,
  Grid,
  GridItem,
  Box,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import FooterContactForm from "../ui/FooterContactForm";
import { useRouter } from "next/navigation";
import LeagalLinkPopup from "@/app/components/popup/leagal-links"

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <LeagalLinkPopup isOpen={isOpen}
        onClose={onClose} />
      <Flex
        backgroundColor="bg-default"
        justify="center"
        w="100%"
        flexDirection="column"
        borderTop="1px"
        borderColor="text-default"
        borderStyle="dotted"
        pt="4.5rem"
      >
        <FooterContactForm />
        <Grid
          templateColumns={{ base: "1fr 1fr", md: "repeat(3, 1fr)" }}
          mx="1rem"
          mb="5px"
        >
          <Flex align="center" gap=".5rem">
            <Image alt="librum logo" src="/logo.svg" w="30px" />
            <Heading size="md" color="text-default">
              Librum
            </Heading>
          </Flex>
          <Text
            fontSize="sm"
            alignSelf="center"
            justifySelf="center"
            display={{ base: "none", md: "flex" }}
          >
            © 2024 Librum-Reader, All rights reserved
          </Text>
          <Flex justifySelf="end" alignSelf="center" align="center" gap="1rem">
            <Link href="/impressum" alignSelf="center">
              Impressum
            </Link>
            <Link alignSelf="center" justifySelf="end" onClick={onOpen}>
              Legal
            </Link>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default Footer;
