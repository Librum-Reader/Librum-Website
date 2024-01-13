"use client";
import { getStripe } from "@/app/utils/stripe-client";
import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Text,
  useMediaQuery,
  useToast
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { createCheckoutSession, createPortalLink, fetchUserInfo } from "../utils/apiFunctions";

const PricingCard = ({ products, user, isSubscribed }) => {
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");
  const [isLoading, setIsLoading] = useState(false);
  const [priceIdLoading, setPriceIdLoading] = useState();

  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });

  const buttonText = isSubscribed ? "Manage" : "Get started";

  const router = useRouter();
  const toast = useToast();


  const handleGetStarted = async (product) => {
    if (!isLoggedIn) {
      toast({
        title: "Please login to continue",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return null;
    }
    if (product?.price === 0) return null;

    setPriceIdLoading(product?.priceId);

    if (isSubscribed) {
      const url = await createPortalLink(user);
      router.push(url);
      return null;
    }
    // create checkout session
    await createCheckoutSession(user, product?.priceId);
    return null;
  }

  return (
    <Flex
      width={{ base: "80%", md: "80%" }}
      height={{ base: "100%", md: "100dvh" }}
      mx={{ base: "0", md: "auto" }}
      mb="6rem"
      mt="2rem"
      p="2rem"
      gap={"2rem"}
      direction={{ base: "column", md: "row" }}
      justify="center"
    >
      {products.length > 0 && products.map((product) => {
        return (
          <Flex
            background="user-profile-bg"
            border="1px"
            borderColor={product.id === user.productId ? "#946bde" : "user-profile-border"}
            borderRadius="md"
            direction="column"
            padding="1.5rem"
            gap="1rem"
            className="contribute-card"
            width="20rem"
            alignSelf="flex-start"
            minH={isLargerThan1700 ? "640px" : "630px"}
            key={product?.id}
          >
            <Flex
              direction="column"
              minH={isLargerThan1700 ? "200px" : "230px"}
              gap="1.5rem"
            >
              <Text fontSize="2xl" textColor="#946bde" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="md" minH={isLargerThan1700 ? "100px" : "100px"}>
                {product.description}
              </Text>
              <Text fontSize="2rem" fontWeight="bold" mb="2rem">
                {product.price === 0 ? "Free" : `${product.price / 100}€ / mo`}
              </Text>
            </Flex>
            <Button isLoading={product.priceId === priceIdLoading} variant="primary" mb="2rem" h="3rem" onClick={() => handleGetStarted(product)}>{buttonText}</Button>
            <Flex direction="column" mb="2rem">
              <Text fontWeight="bold" mb="1rem">
                What you get:
              </Text>
              <List spacing={1}>
                {product?.features?.map((feature, index) => {
                  return (
                    <ListItem key={index}>
                      <Flex align="baseline" gap=".5rem">
                        <Box>
                          <AiOutlineCheckCircle
                            color="#946bde"
                            className="tier-check"
                          />
                        </Box>
                        <Text m="0">{feature}</Text>
                      </Flex>
                    </ListItem>
                  );
                })}
              </List>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default PricingCard;
