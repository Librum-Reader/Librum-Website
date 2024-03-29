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
} from "@chakra-ui/react";

import { deleteAccount } from "../../utils/apiFunctions";

import { useRouter } from "next/navigation";

const DeleteAccount = ({ email, token }) => {
  const [emailMatches, setEmailMatches] = useState(false);

  const {
    isOpen: isDeleteAccountOpen,
    onOpen: onDeleteAccountOpen,
    onClose: onDeleteAccountClose,
  } = useDisclosure();

  const router = useRouter();

  const handleDeleteAccount = () => {
    localStorage.setItem("deletedAccount", email);
    localStorage.removeItem("token");
    deleteAccount(token);
    router.push("/accountdeleted");
  };

  const validateEmail = (e) => {
    if (e.target.value === email) {
      setEmailMatches(true);
    }
  };

  return (
    <>
      <Button
        variant="destructive"
        w="170px"
        size="sm"
        alignSelf="start"
        h="40px"
        onClick={onDeleteAccountOpen}
      >
        Delete Account
      </Button>
      <Modal
        isOpen={isDeleteAccountOpen}
        onClose={onDeleteAccountClose}
        variant="defaultVariant"
        isCentered
        size="lg"
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Delete account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text mb="1rem">
                Deleting your account is an irreversible action.
              </Text>
              <Text mb="1rem">
                Once you delete your account, there is no going back. Please be
                certain this is what you want to do.
              </Text>
              <Flex direction="column">
                <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
                  Confirm account deletion by entering your account&apos;s email
                </Text>
                <Input
                  type="text"
                  placeholder="Your email"
                  onChange={validateEmail}
                />
                <Flex gap="1rem" mt="3rem" mb="1rem">
                  <Button
                    variant="primary"
                    onClick={() => {
                      onDeleteAccountClose();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    isDisabled={emailMatches ? false : true}
                    onClick={handleDeleteAccount}
                  >
                    Delete account
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteAccount;
