import React from "react";

import {
  Flex,
  Text,
  Button,
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

import { FaRegEdit } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchUserInfo,
  editUser,
  changePassword,
} from "@/app/utils/apiFunctions";
import { useState } from "react";

const UsernameAndEmail = () => {
  let token;
  const queryClient = useQueryClient();

  const {
    isOpen: isAlertOpen,
    onClose: onAlertClose,
    onOpen: onAlertOpen,
  } = useDisclosure();

  // State handlers for changing password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const resetPassword = () => {
    setNewPassword("");
    setConfirmPassword("");
  };

  // State handlers for changing username
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const handleNewFirstName = (e) => setNewFirstName(e.target.value);
  const handleNewLastName = (e) => setNewLastName(e.target.value);
  const resetUsernames = () => {
    setNewFirstName("");
    setNewLastName("");
  };

  const handleUpdateUser = (newFirstName, newLastName) => {
    const token = localStorage.getItem("token");

    updateUser.mutate({
      firstName: newFirstName,
      lastName: newLastName,
      token: token,
    });
  };

  const handleEditPassword = (password) => {
    const token = localStorage.getItem("token");

    editPassword.mutate({
      password: password,
      token: token,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const validatePassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === newPassword) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return fetchUserInfo(token);
    },
  });

  // Mutations for changing username, image, password, and other info
  const updateUser = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onEditUserNameClose();
      toast({
        title: "Success!",
        description: "Your information was updated.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const {
    isOpen: isEditUserNameOpen,
    onOpen: onEditUserNameOpen,
    onClose: onEditUserNameClose,
  } = useDisclosure();

  const [errorMsg, setErrorMsg] = useState("");

  const editPassword = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      if (data.code === 0) {
        setErrorMsg("The password entered was too short.");
        onAlertOpen();
      } else {
        onChangePasswordClose();
        resetPassword();
        toast({
          title: "Success!",
          description: "Your password has been changed.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });

  const {
    isOpen: isChangePasswordOpen,
    onOpen: onChangePasswordOpen,
    onClose: onChangePasswordClose,
  } = useDisclosure();

  const {
    isOpen: isEditEmailOpen,
    onOpen: onEditEmailOpen,
    onClose: onEditEmailClose,
  } = useDisclosure();

  return (
    <Flex
      direction="column"
      p={{ base: "1rem", md: "2rem" }}
      // w="320px"
      w="100%"
      h="auto"
      borderRight={{ base: "0", md: "1px" }}
      borderBottom={{ base: "1px", md: "0" }}
      borderColor={{
        base: "user-profile-border",
        md: "user-profile-border",
      }}
    >
      <Text
        fontSize="sm"
        textColor="text-default"
        mb={{ base: "1rem", md: "2rem" }}
      >
        YOUR INFORMATION
      </Text>
      <Flex direction="column" my="1rem">
        <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
          Username
        </Text>

        <Flex
          w="100%"
          border="1px"
          background="user-info-bg"
          borderColor="user-profile-border"
          borderRadius="md"
          onPlayingCapture=".8rem"
          justify="space-between"
          align="center"
          mb="1rem"
          pl=".8rem"
          py=".3rem"
        >
          <Text fontSize="md">
            {data?.firstName} {data?.lastName}
          </Text>

          <Button variant="secondary" size="sm" border="0">
            <FaRegEdit
              size={20}
              onClick={() => {
                setNewFirstName(data?.firstName);
                setNewLastName(data?.lastName);
                onEditUserNameOpen();
              }}
            />
          </Button>
        </Flex>

        <Flex w="100%" justify="space-between">
          <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
            Email
          </Text>
        </Flex>
        <Flex
          w="100%"
          border="1px"
          background="user-info-bg"
          borderColor="user-profile-border"
          borderRadius="md"
          pl=".8rem"
          py=".3rem"
          justify="space-between"
          align="center"
          mb="1rem"
        >
          <Text>{data?.email}</Text>
        </Flex>
        <Flex
          w="100%"
          borderBottom="1px"
          borderColor="user-profile-border"
          mb=".5rem"
          pb=".2rem"
          mt=".5rem"
          justify="space-between"
        >
          <Text>Security</Text>
        </Flex>

        <Button
          variant="secondary"
          size="sm"
          alignSelf="start"
          h="40px"
          onClick={onChangePasswordOpen}
        >
          Change password
        </Button>
      </Flex>
      {/* Edit username modal */}
      <Modal
        isOpen={isEditUserNameOpen}
        onClose={onEditUserNameClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Edit your username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              First name
            </Text>
            <Input
              type="text"
              variant="editUserInfo"
              value={newFirstName}
              mb="1rem"
              onChange={handleNewFirstName}
            />
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              Last name
            </Text>
            <Input
              type="text"
              variant="editUserInfo"
              value={newLastName}
              onChange={handleNewLastName}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              variant="primary"
              mr="1rem"
              onClick={() => {
                handleUpdateUser(newFirstName, newLastName);
              }}
            >
              {updateUser.isLoading ? <BeatLoader /> : "Save Changes"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                resetUsernames();
                onEditUserNameClose();
              }}
            >
              Discard
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Change password modal */}
      <Modal
        isOpen={isChangePasswordOpen}
        onClose={onChangePasswordClose}
        variant="defaultVariant"
        isCentered
      >
        <ModalOverlay />
        <ModalContent mx="1rem">
          <ModalHeader>Change your password</ModalHeader>
          <ModalCloseButton onClick={resetPassword} />
          <ModalBody>
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              New password
            </Text>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                variant="editUserInfo"
                value={newPassword}
                mb="1rem"
                onChange={handleNewPassword}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="lg"
                  onClick={handleShowPassword}
                  variant="ghost"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text mb=".1rem" fontSize="sm" fontWeight="semibold">
              Confirm new password
            </Text>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                variant="editUserInfo"
                value={confirmPassword}
                onChange={validatePassword}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="lg"
                  onClick={handleShowPassword}
                  variant="ghost"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {confirmPassword ? (
              passwordIsValid ? null : (
                <Text mt="1rem">Passwords must match before submitting.</Text>
              )
            ) : null}
          </ModalBody>

          <ModalFooter>
            <Flex direction="column" gap="1rem" justify="center" w="100%">
              {isAlertOpen ? (
                <Alert status="error" mb=".4rem">
                  <Flex align="center" justify="space-between" w="100%">
                    <AlertIcon />
                    <AlertDescription>{errorMsg}</AlertDescription>
                    <CloseButton
                      // right={-1}
                      // top={-1}
                      onClick={onAlertClose}
                    />
                  </Flex>
                </Alert>
              ) : null}
              <Flex w="100%" justify="end">
                <Button
                  variant="primary"
                  mr="1rem"
                  onClick={() => {
                    handleEditPassword(newPassword);
                  }}
                >
                  {updateUser.isLoading ? <BeatLoader /> : "Save Changes"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    onChangePasswordClose();
                    resetPassword();
                  }}
                >
                  Discard
                </Button>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default UsernameAndEmail;
