"use client";
import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Input,
  Button,
  InputGroup,
  FormControl,
  InputRightElement,
  FormLabel,
  useToast,
} from "@chakra-ui/react";

import { confirmPasswordReset } from "../utils/apiFunctions";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const toast = useToast();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const URLtoken = searchParams.get("token");
  const token = URLtoken.replace(/ /g, "+");
  const [validPassword, setValidPassword] = useState(true);

  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordReset = () => {
    confirmPasswordReset({
      email: email,
      token: token,
      password: password,
    });
    setConfirmPassword("");
    setPassword("");
  };

  return (
    <Flex h="100dvh" justify="center">
      <Flex
        background="user-profile-bg"
        border="1px"
        borderColor="user-profile-border"
        borderRadius="md"
        p={{ base: "1rem", md: "2rem" }}
        direction="column"
        h="fit-content"
        mt="4rem"
      >
        <Heading size="lg" mt="0" mb="1rem">
          Password Reset
        </Heading>
        <FormControl>
          <FormLabel
            fontSize="md"
            textColor="text-default"
            mb="0"
            fontWeight="semibold"
          >
            Enter new password
          </FormLabel>
          <InputGroup>
            <Input
              fontSize="md"
              value={password}
              onChange={handlePassword}
              variant="defaultVariant"
              type={showPassword ? "text" : "password"}
              w="300px"
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
            Confirm new password
          </FormLabel>
          <InputGroup>
            <Input
              fontSize="md"
              variant="defaultVariant"
              type={showPassword ? "text" : "password"}
              onChange={handleConfirmPassword}
              value={confirmPassword}
            />
            <InputRightElement width="3rem">
              {showPassword ? (
                <AiOutlineEyeInvisible onClick={handleShowPassword} />
              ) : (
                <AiOutlineEye onClick={handleShowPassword} />
              )}
            </InputRightElement>
          </InputGroup>
          {validPassword ? null : (
            <Text fontSize="sm" textColor="red">
              Passwords must match.
            </Text>
          )}
        </FormControl>
        <Button
          alignSelf="flex-end"
          variant="primary"
          mt="1rem"
          onClick={handlePasswordReset}
        >
          Reset password
        </Button>
      </Flex>
    </Flex>
  );
};

export default ResetPassword;
