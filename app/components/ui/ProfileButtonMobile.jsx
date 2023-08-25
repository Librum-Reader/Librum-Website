"use client";

import React from "react";

import { Button, Avatar, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { updateLoggedIn, updateUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

import { fetchUserInfo, fetchAvatar } from "../../utils/apiFunctions";

const ProfileButtonMobile = () => {
  const [token, setToken] = useState(null);
  const [tokenExists, setTokenExists] = useState(false);
  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.user.value);

  // Redux functions
  const dispatch = useDispatch();

  const setUser = (token) => {
    fetchUserInfo(token).then((result) => {
      dispatch(updateUser(result));
    });
  };

  const {
    isLoading: isAvatarLoading,
    error: avatarError,
    data: avatarData,
  } = useQuery({
    queryKey: ["avatar"],
    queryFn: () => {
      return fetchAvatar(token);
    },
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      console.log("query: ", token);
      return fetchUserInfo(token);
    },
  });

  const path = usePathname();
  return (
    <Link href="/profile">
      <Flex align="center" ml=".5rem">
        <Avatar src={!isAvatarLoading && avatarData} size="sm" />
        <Button colorScheme="gray" variant="drawerButton">
          {data?.firstName} {data?.lastName}
        </Button>
      </Flex>
    </Link>
  );
};

export default ProfileButtonMobile;
