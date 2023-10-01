import React, { useState, useEffect } from "react";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Center,
  Heading,
  Text,
  Box,
  Flex,
  useToast,
  Image,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
} from "@chakra-ui/react";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  userRegistration,
  getVerifiedStatus,
} from "../../../utils/apiFunctions";

import useModalToggle from "../../../Hooks/useModalToggle";

import { BeatLoader } from "react-spinners";
import { toggleConfirmEmailModal } from "@/app/features/modals/modalSlice";

const RegisterModal = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [isEmailConfirmed, setIsEmailConfirmed] = useState();

  const { isRegisterModalOpen, toggleRegister, toggleConfirmEmail } =
    useModalToggle();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //   const registerAccount = () => {
  //     onCloseLogin();
  //     setTimeout(() => {
  //       onOpenRegister();
  //     }, 10);
  //   };

  let emailConfirmationInterval;

  const listenForEmailConfirmation = () => {
    emailConfirmationInterval = setInterval(() => {
      confirmEmail(userInfo.email);
    }, 4000);
  };

  const confirmEmail = async (email) => {
    const result = await getVerifiedStatus(email);
    if (result == true) {
      clearInterval(emailConfirmationInterval);
      toggleConfirmEmail();
      onOpenLogin();
    }
  };

  const register = useMutation({
    mutationFn: userRegistration,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["register"] });
        toggleRegister();
        setIsEmailConfirmed(false);
        toggleConfirmEmail();
        listenForEmailConfirmation();
      } else {
        toast({
          title: "Uh oh...",
          description: data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });

  const handleRegister = () => {
    if (userInfo.password !== userInfo.confirmPassword) {
      toast({
        title: "Uh oh...",
        description: "Confirmation password doesn't match",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (!isChecked) {
      toast({
        title: "Please accept the terms and conditions.",
        description:
          "We are unable to create your account without agreeing to our terms and conditions.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      register.mutate(userInfo);
    }
  };

  const [isChecked, setIsChecked] = useState(true);

  return (
    <Modal
      isCentered
      isOpen={isRegisterModalOpen}
      onClose={toggleRegister}
      variant="defaultVariant"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Flex direction="column">
              <Box textAlign="center" mb="1rem">
                <Heading size="lg" pb=".5rem">
                  Welcome to Librum
                </Heading>
                <Text fontSize="sm" lineHeight={1.6}>
                  Your credentials are only used to authenticate you. Your
                  credentials will be stored in a secure database.
                </Text>
              </Box>
              <Flex gap="1rem" my="1rem">
                <FormControl>
                  <FormLabel
                    fontSize="md"
                    textColor="text-default"
                    mb="0"
                    fontWeight="semibold"
                  >
                    First Name
                  </FormLabel>
                  <Input
                    fontSize="md"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleUserInfo}
                    variant="defaultVariant"
                    placeholder="Kai"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize="md"
                    textColor="text-default"
                    mb="0"
                    fontWeight="semibold"
                  >
                    Last Name
                  </FormLabel>
                  <Input
                    fontSize="md"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleUserInfo}
                    variant="defaultVariant"
                    placeholder="Doe"
                  />
                </FormControl>
              </Flex>
              <Box>
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
                    fontSize="md"
                    name="email"
                    value={userInfo.email}
                    onChange={handleUserInfo}
                    variant="defaultVariant"
                    placeholder="kaidoe@gmail.com"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel
                    fontSize="md"
                    textColor="text-default"
                    mb="0"
                    fontWeight="semibold"
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      fontSize="md"
                      name="password"
                      value={userInfo.password}
                      onChange={handleUserInfo}
                      variant="defaultVariant"
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement width="3rem">
                      {showPassword ? (
                        <AiOutlineEyeInvisible onClick={handleShowPassword} />
                      ) : (
                        <AiOutlineEye onClick={handleShowPassword} />
                      )}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel
                    fontSize="md"
                    textColor="text-default"
                    mb="0"
                    fontWeight="semibold"
                  >
                    Confirm password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      fontSize="md"
                      value={userInfo.confirmPassword}
                      name="confirmPassword"
                      onChange={handleUserInfo}
                      variant="defaultVariant"
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement width="3rem">
                      {showPassword ? (
                        <AiOutlineEyeInvisible onClick={handleShowPassword} />
                      ) : (
                        <AiOutlineEye onClick={handleShowPassword} />
                      )}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Checkbox
                  mt="1rem"
                  colorScheme="purple"
                  isChecked={isChecked}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                >
                  <Text fontSize="sm">
                    I accept the{" "}
                    <Link href="/termsofservice" textColor="#946BDE">
                      Terms of Service
                    </Link>{" "}
                    and the{" "}
                    <Link href="/privacypolicy" textColor="#946BDE">
                      Privacy Policy
                    </Link>
                  </Text>
                </Checkbox>
              </Box>
            </Flex>
          </Center>
        </ModalBody>
        <ModalFooter>
          <Box width="100%" textAlign="center">
            <Button
              onClick={() => {
                handleRegister();
              }}
              variant="loginButton"
              width="100%"
              mb="1rem"
              fontSize={15}
            >
              {register.isLoading ? <BeatLoader /> : "Let's Get Started"}
            </Button>
            <Text fontSize="sm">
              Already have an account?{" "}
              <Link
                href="#"
                textColor="#946BDE"
                onClick={() => {
                  onCloseRegister();
                  setTimeout(() => {
                    onOpenLogin();
                  }, 10);
                }}
              >
                Log In
              </Link>
            </Text>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
