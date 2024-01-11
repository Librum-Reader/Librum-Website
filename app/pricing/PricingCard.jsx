"use client";
import React, { use, useState } from "react";
import { getStripe } from "@/app/utils/stripe-client";

import {
  Flex,
  Heading,
  Button,
  Text,
  List,
  ListItem,
  ListIcon,
  useMediaQuery,
  Box,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchUserInfo } from "../utils/apiFunctions";
import PricingPaymentPopup from "@/app/components/popup/pricing-payment";

const PricingCard = ({ products }) => {
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentData, setPaymentData] = useState({});

  const isLoggedIn = useSelector((state) => {
    console.log(state);
    return state.user.isLoggedIn;
  });

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

    const token = localStorage.getItem("token");

    const userinfo = await fetchUserInfo(token);

    if (userinfo?.productId === product?.id) {
      toast({
        title: "You already have this tier",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return null;
    }

    try {
      const createCheckoutSession = await fetch(
        '/api/create-checkout-session',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: userinfo?.email, name: userinfo?.firstName + " " + userinfo?.lastName,
            priceId: product?.priceId,
            customerId: userinfo?.customerId,
          })
        }
      );

      const { sessionId } = await createCheckoutSession.json();

      const stripe = await getStripe();

      stripe?.redirectToCheckout({ sessionId });

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <Flex
      width={{ base: "100%", md: "80%" }}
      height={{ base: "100%", md: "100dvh" }}
      mx={{ base: "0", md: "auto" }}
      mb="6rem"
      mt="2rem"
      p="2rem"
      gap={{ base: "2rem", "2xl": "4rem" }}
      direction={{ base: "column", md: "row" }}
      justify="center"
    >
      {products.length > 0 && products.map((product) => {
        return (
          <Flex
            background="user-profile-bg"
            border="1px"
            borderColor="user-profile-border"
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
              gap="2rem"
            >
              <Text fontSize="xl" textColor="#946bde" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="md" minH={isLargerThan1700 ? "50px" : "100px"}>
                {product.description}
              </Text>
              <Text fontSize="2rem" fontWeight="bold" mb="2rem">
                {product.price === 0 ? "Free" : `${product.price / 100}€/m`}
              </Text>
            </Flex>
            <Button variant="primary" mb="2rem" h="3rem" onClick={() => handleGetStarted(product)}>
              Get started
            </Button>
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
      <PricingPaymentPopup paymentData={paymentData} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default PricingCard;
