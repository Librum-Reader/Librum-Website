import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Flex, Text, Button } from "@chakra-ui/react";
import UpgradeTier from "../profile/UpgradeTier";
import { useRouter } from "next/navigation";

const TierInformation = () => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const router = useRouter();

  const [portalLoading, setPortalLoading] = React.useState(false);

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
    // console.log(data);
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

  const handleOpenPortal = async () => {
    try {
      setPortalLoading(true);
      const response = await fetch("/api/create-portal-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data?.email,
          name: data?.firstName + " " + data?.lastName,
          customerId: data?.customerId,
        }),
      });
      const { url } = await response.json();
      router.push(url);
      setPortalLoading(false);
    } catch (error) {
      console.log(error);
      setPortalLoading(false);
    }
    // const response = await fetch("/api/create-portal-session", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ token: token }),
    // });

    // const { url } = await response.json();

    // window.location.assign(url);
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
          {data?.role?.toUpperCase()}
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
        <UpgradeTier />
        {/* <Button size="sm" variant="secondary" h="40px">
          See why we offer multiple tiers
        </Button> */}
        <Button size="sm" isLoading={portalLoading} variant="secondary" h="40px" onClick={handleOpenPortal}>
          Open Customer Portal
        </Button>
      </Flex>
    </Flex>
  );
};

export default TierInformation;
