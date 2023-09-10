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

import { deleteAccount } from "../../utils/apiFunctions";

import { useSelector, useDispatch } from "react-redux";

import { updateLoggedIn } from "@/app/features/user/userSlice";

import { useRouter } from "next/navigation";

const DeleteAccount = ({ email, token }) => {
  const dispatch = useDispatch();

  const {
    isOpen: isDeleteAccountOpen,
    onOpen: onDeleteAccountOpen,
    onClose: onDeleteAccountClose,
  } = useDisclosure();

  const router = useRouter();

  const deleteAccount = () => {
    // localStorage.setItem("deletedAccount", email);
    // localStorage.removeItem("token");
    // dispatch(updateLoggedIn(false));
    //deleteAccount(token)
    // router.push("/accountdeleted");
  };

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
                  Confirm account deletion by entering your account's email
                </Text>
                <Input type="text" placeholder="Your email" />
                <Flex gap="1rem" mt="3rem" mb="1rem">
                  <Button
                    variant="primary"
                    onClick={() => {
                      onDeleteAccountClose();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={deleteAccount}>
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
