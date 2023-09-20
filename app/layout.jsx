"use client";
import { Inter } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import Container from "./components/ui/Container";
import Footer from "./components/sections/Footer";
import dynamic from "next/dynamic";
import Head from "next/head";
import "./globals.css";

import {
  ChakraProvider,
  ColorModeScript,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Card,
  CardBody,
  Flex,
  Image,
  Heading,
  Text,
  Center,
  Button,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Providers } from "./providers";

import { store } from "./store";
import { Provider } from "react-redux";

import { CookiesProvider } from "react-cookie";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { useEffect, useState } from "react";
import { LoginContext } from "./context/loginModalContext";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

import { getVerifiedStatus } from "./utils/apiFunctions";

export default function RootLayout({ children }) {
  const [firstVisit, setFirstVisit] = useState(true);
  const {
    isOpen: isDisclaimerOpen,
    onOpen: onDisclaimerOpen,
    onClose: onDisclaimerClose,
  } = useDisclosure();

  useEffect(() => {
    const inititalVisitToWebsite = localStorage.getItem("firstVisit");

    if (!inititalVisitToWebsite) {
      onDisclaimerOpen();
    }
  }, []);

  // useEffect(() => {
  //   const isVerified = localStorage.getItem("isVerified");
  //   const token = localStorage.getItem("token");
  //   if (!isVerified && token) {
  //     const timer = setTimeout(() => {
  //       if (getVerifiedStatus(token)) {
  //         localStorage.setItem("isVerified", "true");
  //       }
  //     }, 1000);
  //   }

  //   return () => {
  //     timer.s;
  //   };
  // });

  const closeModalAndSetFirstVisit = () => {
    localStorage.setItem("firstVisit", "false");
    onDisclaimerClose();
  };

  const [loginOpen, setLoginOpen] = useState(false);

  const DynamicNav = dynamic(() => import("./components/ui/Navbar"));

  const router = useRouter();

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
  }

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A modern, open source e-book reader and library manager"
          key="desc"
        />
      </Head>
      <body>
        <LoginContext.Provider value={{ loginOpen, setLoginOpen }}>
          <ColorModeScript initialColorMode="dark" />
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.REACT_APP_reCAPTCHA_SITE_KEY}
          >
            <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                <CookiesProvider>
                  <Providers>
                    <Container>
                      <Modal
                        isCentered
                        isOpen={isDisclaimerOpen}
                        onClose={onDisclaimerClose}
                        bg="transparent"
                        closeOnOverlayClick={false}
                        variant="defaultVariant"
                      >
                        <ModalOverlay />
                        <ModalContent
                          alignContent="center"
                          maxW="1000px"
                          w={{ base: "100%", md: "auto" }}
                          bg="transparent"
                          boxShadow="0"
                        >
                          <ModalBody alignContent="center" px="1rem">
                            <Flex
                              w={{ base: "100%", md: "620px" }}
                              bg="bg-default"
                              // mx={{ base: "1rem", md: "0" }}
                              p={{ base: "1rem", md: "4rem" }}
                              borderRadius="md"
                              gap="2rem"
                              direction="column"
                              align="center"
                            >
                              <Image src="/cookies.svg" w="150px" h="auto" />
                              <Heading size="lg">We use cookies</Heading>
                              <Flex
                                gap="2rem"
                                direction="column"
                                justify="center"
                              >
                                <Text align={{ base: "center", md: "center" }}>
                                  We use cookies to provide the best possible
                                  experience. By clicking continue, you agree to
                                  Librum&apos;s policies.
                                </Text>
                                <Flex
                                  gap=".5rem"
                                  justify="space-between"
                                  align={{ base: "center", md: "start" }}
                                  w="100%"
                                  direction={{ base: "column", md: "row" }}
                                >
                                  <UnorderedList mt="0">
                                    <ListItem>
                                      <Link href="/disclaimer">
                                        Legal Disclaimer
                                      </Link>
                                    </ListItem>
                                    <ListItem>
                                      <Link href="/privacypolicy">
                                        Privacy Policy
                                      </Link>
                                    </ListItem>
                                    <ListItem>
                                      <Link href="/cookies">
                                        Cookies Policy
                                      </Link>
                                    </ListItem>
                                    <ListItem>
                                      <Link href="/termsofservice">
                                        Terms of Service
                                      </Link>
                                    </ListItem>
                                  </UnorderedList>
                                </Flex>
                              </Flex>
                              <Flex
                                gap="1rem"
                                direction={{ base: "column", md: "row" }}
                              >
                                <Button
                                  variant="primary"
                                  onClick={closeModalAndSetFirstVisit}
                                  w={{ base: "100%", md: "auto" }}
                                >
                                  Accept and continue
                                </Button>
                                <Button
                                  variant="secondary"
                                  onClick={onDisclaimerClose}
                                >
                                  Decline
                                </Button>
                              </Flex>
                            </Flex>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                      <Navbar />
                      {/* <DynamicNav /> */}
                      {children}
                      <Footer />
                    </Container>
                  </Providers>
                </CookiesProvider>
              </QueryClientProvider>
            </Provider>
          </GoogleReCaptchaProvider>
        </LoginContext.Provider>
      </body>
    </html>
  );
}
