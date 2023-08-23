"use client";

import React from "react";

import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { updateLoggedIn, updateUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

import { fetchUserInfo } from "../../utils/apiFunctions";

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

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      console.log("query: ", token);
      return fetchUserInfo(token);
    },
    enabled: tokenExists,
  });
  const path = usePathname();
  return (
    <Link href="/profile">
      <Button colorScheme="gray" variant="drawerButton">
        {data?.firstName} {data?.lastName}
      </Button>
    </Link>
  );
};

export default ProfileButtonMobile;
