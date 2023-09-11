import React, { useState } from "react";
import {
  Button,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  Flex,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";

const UpgradeTier = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size="sm" variant="primary" h="40px" onClick={onOpen}>
        Upgrade
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        variant="defaultVariant"
        mx="1rem"
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalBody>
            <Flex
              direction="column"
              w="100%"
              align="center"
              gap="2rem"
              mt="1rem"
            >
              <Heading>Upgrade Your Tier</Heading>
              <Text>
                We don't offer upgrading options at the moment. If you require
                additional storage, please contact us at{" "}
                <Text fontWeight="semibold" as="span">
                  contact@librumreader.com
                </Text>
              </Text>
              <Flex
                gap="1rem"
                mb="1.5rem"
                direction={{ base: "column", md: "row" }}
                justifyContent="center"
                w="100%"
              >
                <Button
                  variant="primary"
                  w={{ base: "full", md: "180px" }}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Link href="mailto:contact@librumreader.com">
                  <Button variant="secondary" w={{ base: "full", md: "180px" }}>
                    Email us
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpgradeTier;
