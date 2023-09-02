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

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        variant="legalVariant"
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent mx={{ base: "1rem", md: "0" }}>
          <ModalHeader px="4rem" pt="3.5rem">
            Librum-Reader Legal Information
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px="4rem" pb="3rem">
            <Flex direction="column">
              The following pages provide the various legal information
              pertaining to Librum-Reader:
              <VStack mt="1rem" align="start">
                <UnorderedList mt="0">
                  <ListItem>
                    <Link href="/disclaimer">Legal Disclaimer</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/privacypolicy">Privacy Policy</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/cookies">Cookies Policy</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/termsofservice">Terms of Service</Link>
                  </ListItem>
                </UnorderedList>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
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
            <Image alt="librum logo" src="Logo.svg" w="30px" />
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
            © 2023 Librum-Reader, All rights reserved
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
