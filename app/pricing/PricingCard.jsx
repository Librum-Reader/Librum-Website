"use client";
import { useContext, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useMediaQuery,
  useToast
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { createCheckoutSession, createPortalLink } from "../utils/apiFunctions";
import Link from "next/link";
import { LoginContext } from "../context/loginModalContext";

const PricingCard = ({ products, user, isSubscribed }) => {
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");
  const [priceIdLoading, setPriceIdLoading] = useState();

  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });

  const buttonText = isSubscribed && isLoggedIn ? "Manage" : "Get started";

  const router = useRouter();
  const toast = useToast();
  const { loginOpen, setLoginOpen } = useContext(LoginContext);


  const handleGetStarted = async (product) => {

    if (!isLoggedIn) {
      setLoginOpen(!loginOpen);
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
    <>
      <Flex alignItems={"center"} direction={"column"} pt="4rem" pb={"2rem"} gap={"0.5rem"}>
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} textAlign={"center"} fontWeight="bold" color="#946bde">Read, Explore, Excel with Librum</Heading>
        <Text fontWeight="bold">
          Choose a plan and start reading
        </Text>
      </Flex>
      <Flex
        width={{ base: "100%", md: "80%" }}
        height={{ base: "100%" }}
        mx={{ base: "0", md: "auto" }}
        p="2rem"
        pb="0"
        gap={{ base: "3rem", md: "2rem" }}
        direction={{ base: "column", md: "row" }}
        justify="center"
      >
        {products.length > 0 && products.map((product) => {
          return (
            <Flex
              background="user-profile-bg"
              border="1px"
              borderColor={product.id === user?.productId ? "#946bde" : "user-profile-border"}
              borderRadius="md"
              direction="column"
              padding="1.5rem"
              gap="1rem"
              className="contribute-card"
              width="20rem"
              alignSelf="flex-start"
              minH={isLargerThan1700 ? "640px" : "630px"}
              key={product?.id}
              position={"relative"}
            >
              {product.name === "Pro" && <Text fontWeight={"bold"} fontSize={"medium"} py="4px" px="15px" background={"#946bde"} borderRadius="sm" position={"absolute"} w={"max-content"} top={"0"} left="50%" textAlign={"center"} transform="translate(-50%, -50%)">Most Popular</Text>}
              <Flex
                direction="column"
                minH={isLargerThan1700 ? "200px" : "230px"}
                gap={{ base: "1rem", md: "2rem" }}
                pt="0.5rem"
              >
                <Text fontSize="2xl" textColor="#946bde" fontWeight="bold">
                  {product.name}
                </Text>
                <Text fontSize="md" minH={isLargerThan1700 ? "100px" : "70px"}>
                  {product.description}
                </Text>
                {product.price === 0 ? (
                  <Text fontSize="2rem" fontWeight="bold">Free</Text>
                ) : (
                  <Flex gap={"0.2rem"} alignItems={"baseline"} fontWeight="bold">
                    <Text fontSize="2rem">{`${product.price / 100}€`}</Text>
                    <Flex fontSize={"md"}>
                      /mo
                    </Flex>
                  </Flex>
                )}
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
                          <Text fontSize={"base"} m="0">{feature}</Text>
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
      <Flex alignItems={"center"} direction={"column"} py={{ base: "3rem", md: "5rem" }} gap={"0.5rem"}>
        <Text fontWeight="bold" fontSize={"lg"} p="1rem" textAlign={"center"}>
          Need more? Contact us at <Link style={{ color: "#946bde" }} href="mailto:contact@librumreader.com">contact@librumreader.com</Link> to discuss your custom needs.
        </Text>
      </Flex>
    </>
  );
};

export default PricingCard;
