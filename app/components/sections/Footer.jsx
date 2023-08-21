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
        <ModalContent>
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
        <VStack backgroundColor="bg-default" mb="4.5rem">
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
        <Grid templateColumns="repeat(3, 1fr)" mx="1rem" mb="5px">
          <Flex align="center" gap=".5rem">
            <Image alt="librum logo" src="Logo.svg" w="30px" />
            <Heading size="md" color="text-default">
              Librum
            </Heading>
          </Flex>
          <Text fontSize="sm" alignSelf="center" justifySelf="center">
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
