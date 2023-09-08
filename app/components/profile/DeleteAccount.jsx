import React from "react";
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

const DeleteAccount = ({ email }) => {
  const {
    isOpen: isDeleteAccountOpen,
    onOpen: onDeleteAccountOpen,
    onClose: onDeleteAccountClose,
  } = useDisclosure();

  return (
    <>
      <Button
        variant="destructive"
        w="150px"
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
        <ModalContent>
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
                  Confirm account deletion by entering your account's email
                </Text>
                <Input type="text" placeholder="Your email" />
                <Flex gap="1rem" mt="3rem">
                  <Button
                    variant="primary"
                    onClick={() => {
                      onDeleteAccountClose();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive">Delete account</Button>
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
