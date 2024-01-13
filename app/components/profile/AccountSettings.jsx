import React, { useState, useEffect } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  updateUser,
  updateLoggedIn,
  resetUser,
} from "@/app/features/user/userSlice";

import Link from "next/link";
import { fetchUserInfo } from "@/app/utils/apiFunctions";

import DeleteAccount from "./DeleteAccount";

const AccountSettings = ({ email }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return fetchUserInfo(token);
    },
  });

  const router = useRouter();
  // Logout function
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const logOut = () => {
    localStorage.removeItem("token");
    removeCookie("token");
    dispatch(resetUser());
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
    // w="320px"
    // h="255px"
    >
      <Flex
        direction="column"
        borderRadius="md"
        // w="320px"
        pr="2rem"
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
            w="170px"
          >
            Logout
          </Button>
          <DeleteAccount email={email} token={token} />
        </Flex>
      </Flex>
      {data?.role === "Admin" ? (
        <Flex
          direction="column"
          // w="320px"
          pl={{ base: 0, md: "2rem" }}
          pt={{ base: "2rem", md: 0 }}
          borderLeft={{ base: "0px", md: "1px" }}
          borderTop={{ base: "1px", md: "0px" }}
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
            ADMIN FUNCTIONS
          </Text>
          <Flex direction="column" my="1rem" mb="2rem" gap="1rem">
            <Link href="/studio" target="#">
              <Button
                variant="primary"
                size="sm"
                alignSelf="start"
                h="40px"
                w="150px"
              >
                Sanity Studio
              </Button>
            </Link>
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default AccountSettings;
