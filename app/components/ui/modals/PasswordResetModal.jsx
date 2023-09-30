import React, { useState } from "react";
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

import { resetPassword } from "@/app/utils/apiFunctions";

const PasswordResetModal = () => {
  const {
    togglePasswordReset,
    togglePasswordConfirmation,
    isPasswordResetOpen,
  } = useModalToggle();

  const [email, setEmail] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordReset = () => {
    setEmail("");
    togglePasswordReset();
    togglePasswordConfirmation();
    resetPassword(email);
  };

  return (
    <Modal
      isCentered
      isOpen={isPasswordResetOpen}
      onClose={togglePasswordReset}
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
              Please enter the email that you&apos;ve used to create your
              account:
            </Text>
            <FormControl>
              <FormLabel
                fontSize="md"
                textColor="text-default"
                mb="0"
                fontWeight="semibold"
              >
                Email
              </FormLabel>
              <Input
                value={email}
                onChange={handleEmail}
                placeholder="Enter Your Email"
                fontSize="md"
                variant="defaultVariant"
              />
            </FormControl>
            <Button
              variant="primary"
              alignSelf="flex-end"
              onClick={handlePasswordReset}
            >
              Reset password
            </Button>
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PasswordResetModal;
