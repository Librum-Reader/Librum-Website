import React from "react";
import { Flex, Avatar, Button, Box, Text, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchUserInfo, fetchAvatar } from "@/app/utils/apiFunctions";

const AvatarAndUserName = () => {
  const [avatarLoading, setAvatarLoading] = useState(true);

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return fetchUserInfo(token);
    },
  });

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

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="2rem"
        borderRight={{ base: "0px", md: "1px" }}
        borderBottom={{ base: "1px", md: "0px" }}
        borderColor={{
          base: "user-profile-border",
          md: "user-profile-border",
        }}
        pr={{ base: "0", md: "2rem" }}
        pb={{ base: "1rem", md: "0" }}
        pt={{ base: "1rem", md: "0" }}
      >
        <Avatar src={avatarData ?? avatarData} icon={<Spinner />} size="2xl" />

        {/* {!isAvatarLoading && <Image src={avatarData} alt="Fetched" />} */}
        <Text fontWeight="bold">
          {data?.firstName} {data?.lastName}
        </Text>
        <Box>
          <Button
            variant="secondary"
            size="sm"
            mb="1rem"
            w={{ base: "full", md: "auto" }}
            h="40px"
            // onClick={onAvatarOpen}
          >
            Change avatar
          </Button>
          <Button
            variant="primary"
            size="sm"
            w="full"
            // onClick={logOut}
            h="40px"
          >
            Logout
          </Button>
        </Box>
      </Flex>
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
            <Button variant="secondary" size="sm" border="0">
              <FaRegEdit
              // onClick={() => {
              //   setNewEmail(data?.email);
              //   onEditEmailOpen();
              // }}
              />
            </Button>
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
            // onClick={onChangePasswordOpen}
          >
            Change password
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default AvatarAndUserName;
