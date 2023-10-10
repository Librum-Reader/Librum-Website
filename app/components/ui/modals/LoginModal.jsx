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
} from "@chakra-ui/react";

import useModalToggle from "../../../Hooks/useModalToggle";

import { BeatLoader } from "react-spinners";
import { userLogin, fetchUserInfo } from "../../../utils/apiFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { updateLoggedIn, updateUser } from "../../../features/user/userSlice";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";

const LoginModal = () => {
  const dispatch = useDispatch();

  const { togglePasswordReset, toggleLogin, toggleRegister, isLoginOpen } =
    useModalToggle();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const router = useRouter();

  const toast = useToast();
  const [token, setToken] = useState(null);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    const userInfo = { ...loginInfo, [e.target.name]: e.target.value };
    setLoginInfo(userInfo);
  };

  const setUser = (token) => {
    fetchUserInfo(token).then((result) => {
      dispatch(updateUser(result));
    });
  };

  const queryClient = useQueryClient();
  const login = useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
      if (data.code === 0) {
        toast({
          title: "Uh oh...",
          description: "The email field is required.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (data.code === 1) {
        toast({
          title: "Uh oh...",
          description: "You've entered the wrong email or password.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Welcome!",
          description: "You have been logged in. Enjoy.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setToken(data);
        setUser(data);
        dispatch(updateLoggedIn(true));
        toggleLogin();
        router.push("/profile");
      }
    },
  });

  const handleLogin = (userInfo) => {
    login.mutate(userInfo);
  };

  return (
    <Modal
      isCentered
      isOpen={isLoginOpen}
      onClose={() => {
        toggleLogin();
      }}
      variant="defaultVariant"
    >
      <ModalOverlay />
      <ModalContent m={{ base: "1rem", md: "0" }}>
        <ModalHeader> </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Box textAlign="center" mb="1rem">
              <Heading size="lg" pb=".5rem">
                Welcome back!
              </Heading>
              <Text fontSize="md">Log into your account</Text>
            </Box>
          </Center>
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
              value={loginInfo.email}
              name="email"
              onChange={handleLoginInput}
              placeholder="Enter Your Email"
              fontSize="md"
              variant="defaultVariant"
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
                value={loginInfo.password}
                name="password"
                onChange={handleLoginInput}
                placeholder="Enter Your Password"
                fontSize="md"
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
          <Text fontSize="sm">
            Forgot password? Click{" "}
            <Link
              href="#"
              textColor="#946BDE"
              onClick={() => {
                togglePasswordReset();
                toggleLogin();
              }}
            >
              here
            </Link>{" "}
            to reset it.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Box width="100%" textAlign="center" pb=".7rem">
            <Button
              onClick={() => {
                handleLogin({
                  Email: loginInfo.email,
                  Password: loginInfo.password,
                });
              }}
              variant="primary"
              width="100%"
              mb="1rem"
            >
              {login.isLoading ? <BeatLoader /> : "Log In"}
            </Button>
            <Button
              variant="secondary"
              width="100%"
              onClick={() => {
                toggleLogin();
                toggleRegister();
              }}
            >
              Register
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
