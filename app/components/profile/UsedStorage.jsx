import React from "react";
import { Flex, Text, Progress } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const UsedStorage = () => {
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

  let storageLimit;
  let usedStorage;
  let storageProgress;

  if (!isLoading) {
    storageLimit = data?.bookStorageLimit;
    storageLimit = storageLimit / 1024;
    storageLimit = storageLimit / 1024;
    storageLimit = storageLimit / 1024;

    // usedStorage = data?.usedBookStorage;
    usedStorage = data?.usedBookStorage;
    usedStorage = usedStorage / 1024;
    usedStorage = usedStorage / 1024;
    usedStorage = usedStorage / 1024;

    storageProgress = usedStorage / storageLimit;
    storageProgress = storageProgress * 100;
  }

  return (
    <Flex
      direction="column"
      background="user-profile-bg"
      border="1px"
      borderColor="user-profile-border"
      borderRadius="md"
      p={{ base: "1rem", md: "2rem" }}
      h="270px"
    >
      <Text
        fontSize="sm"
        textColor="text-default"
        mb={{ base: "1rem", md: "2rem" }}
      >
        USED STORAGE
      </Text>
      <Flex justify="space-between" gap="4rem">
        <Flex direction="column" my="1rem">
          <Text
            fontSize="3xl"
            fontWeight="700"
            textColor="text-default"
            textAlign="left"
          >
            {usedStorage?.toFixed(2)} GB
          </Text>
          <Text fontSize="sm" textColor="text-default">
            Used Storage
          </Text>
        </Flex>
        <Flex direction="column" my="1rem">
          <Text
            fontSize="3xl"
            fontWeight="700"
            textColor="text-default"
            textAlign="right"
          >
            {storageLimit?.toFixed(2)} GB
          </Text>
          <Text fontSize="sm" textColor="text-default" textAlign="right">
            Free Storage
          </Text>
        </Flex>
      </Flex>
      <Progress
        value={storageProgress?.toFixed(0)}
        height="28px"
        colorScheme="text-default"
      />
    </Flex>
  );
};

export default UsedStorage;
