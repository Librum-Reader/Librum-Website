import React from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  useToast,
  Link,
  Flex,
} from "@chakra-ui/react";

import useModalToggle from "../../../Hooks/useModalToggle";

const PasswordResetConfirmation = () => {
  const { isPasswordConfirmationOpen, togglePasswordConfirmation } =
    useModalToggle();

  return (
    <Modal
      isCentered
      isOpen={isPasswordConfirmationOpen}
      onClose={togglePasswordConfirmation}
      variant="defaultVariant"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" align="center" gap="1rem">
            <Heading size="md">Password Reset</Heading>
            <Text>
              We have sent you an e-mail with a link to complete the password
              reset process. Please click the link and follow the instructions.
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PasswordResetConfirmation;
