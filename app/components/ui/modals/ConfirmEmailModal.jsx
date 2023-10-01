import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Button,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import useModalToggle from "../../../Hooks/useModalToggle";

const ConfirmEmailModal = () => {
  const { toggleConfirmEmail, isConfirmEmailOpen } = useModalToggle();

  return (
    <Modal
      isCentered
      variant="emailConfirmation"
      isOpen={isConfirmEmailOpen}
      onClose={toggleConfirmEmail}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody
          background="bg-default"
          lineHeight="1.5rem"
          borderRadius="5px"
          px="3rem"
          pt="3.3rem"
          pb="3rem"
        >
          <Flex direction="column" align="center">
            <Heading
              size="xl"
              fontSize="2.6rem"
              mb={6}
              color="#ccc"
              textAlign="center"
            >
              Confirm Your Email
            </Heading>
            <Text
              textAlign="center"
              color="#ccc"
              fontSize="1.15rem"
              lineHeight="1.5rem"
            >
              You&apos;re almost ready to go!
            </Text>
            <Text
              textAlign="center"
              color="#ccc"
              fontSize="1.15rem"
              lineHeight="1.5rem"
            >
              Confirm your email by clicking the link we sent you.
            </Text>

            <Button
              variant="primary"
              width="100%"
              p={2}
              mt="3.5rem"
              fontSize="md"
              onClick={() => toggleConfirmEmail()}
            >
              Ok
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmEmailModal;
