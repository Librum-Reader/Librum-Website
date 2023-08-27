import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Flex, Text, Button } from "@chakra-ui/react";

const TierInformation = () => {
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
    console.log(data);
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
      borderRadius="md"
      w="100%"
      pl={{ base: "1rem", md: "2rem" }}
      pt={{ base: "1rem", md: "2rem" }}
      pr={{ base: "1rem", md: "0" }}
      // w="320px"
      h={{ base: "auto", md: "255px" }}
    >
      <Text
        fontSize="sm"
        textColor="text-default"
        mb={{ base: "1rem", md: "2rem" }}
      >
        YOUR TIER
      </Text>
      <Flex direction="column" my="1rem" mb="2rem">
        <Text fontSize="xl" textColor="text-default" textAlign="center">
          {data?.role.toUpperCase()}
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="700"
          textColor="text-default"
          textAlign="center"
        >
          {storageLimit?.toFixed(2)} GB
        </Text>
      </Flex>
      <Flex direction="column" gap="1rem">
        <Button size="sm" variant="primary" h="40px">
          Upgrade
        </Button>
        <Button size="sm" variant="secondary" h="40px">
          See why we offer multiple tiers
        </Button>
      </Flex>
    </Flex>
  );
};

export default TierInformation;
