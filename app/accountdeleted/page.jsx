"use client";

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLoggedIn } from "@/app/features/user/userSlice";

const AccountDeleted = () => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setEmail(localStorage.getItem("deletedAccount"));
    dispatch(updateLoggedIn(false));
  });

  return (
    <Flex w="100wvw" h="100dvh" justify="center">
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
        <Text>
          Your account with the email{" "}
          <Text as="span" fontWeight="semibold">
            {email}
          </Text>{" "}
          has been deleted.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AccountDeleted;
