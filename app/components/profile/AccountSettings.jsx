import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

const AccountSettings = () => {
  // Logout function
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    removeCookie("token");
    dispatch(resetUser({}));
    dispatch(updateLoggedIn(false));
    router.push("/");
  };

  return (
    <Flex
      background="user-profile-bg"
      border="1px"
      borderColor="user-profile-border"
      borderRadius="md"
      p={{ base: "1rem", md: "2rem" }}
      direction={{ base: "column", md: "row" }}
      mb="4.5rem"
      mt="1rem"
      // w="320px"
      // h="255px"
    >
      <Flex
        direction="column"
        borderRadius="md"
        w="100%"
        // w="320px"
        h={{ base: "auto", md: "255px" }}
      >
        <Text
          fontSize="sm"
          textColor="text-default"
          mb={{ base: "1rem", md: "2rem" }}
        >
          ACCOUNT SETTINGS
        </Text>
        <Flex direction="column" my="1rem" mb="2rem" gap="1rem">
          <Button
            variant="primary"
            size="sm"
            alignSelf="start"
            onClick={logOut}
            h="40px"
            w="150px"
          >
            Logout
          </Button>
          <Button
            variant="destructive"
            w="150px"
            size="sm"
            alignSelf="start"
            h="40px"
          >
            Delete Account
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AccountSettings;
