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
} from "@chakra-ui/react";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} variant="defaultVariant">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Librum Legal Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            The following pages provide the various legal information pertaining
            to Librum:
            <VStack mt="2rem">
              <Link href="/disclaimer">Legal Disclaimer</Link>
              <Link href="/privacypolicy">Privacy Policy</Link>
              <Link href="/cookies">Cookies Policy</Link>
              <Link href="/termsofservice">Terms of Service</Link>
            </VStack>
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
        pt="5.5rem"
      >
        <VStack backgroundColor="bg-default" pb="1rem">
          <Heading fontSize="1.5rem" mb="1rem">
            Have any questions or concerns?
          </Heading>
          <Input
            type="email"
            placeholder="Enter your email address"
            w="24rem"
            mb="1rem"
            variant="defaultVariant"
          />
          <Textarea
            placeholder="Message"
            w="24rem"
            mb="1rem"
            variant="defaultVariant"
          />
          <Button variant="primary" size="lg" height="2.5rem">
            Send Message
          </Button>
        </VStack>
        <Grid templateColumns="repeat(3, 1fr)" my="1rem" mx="1rem">
          <Flex align="center" gap="1rem">
            <Image alt="librum logo" src="ereader1.png" />
            <Heading size="md" color="text-default">
              Librum
            </Heading>
          </Flex>
          <Text alignSelf="center" justifySelf="center">
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
