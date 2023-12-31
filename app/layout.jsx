"use client";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "./components/sections/Footer";
import Container from "./components/ui/Container";
import Navbar from "./components/ui/Navbar";

import "./globals.css";

import {
  Button,
  ColorModeScript,
  Flex,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Providers } from "./providers";

import { Provider } from "react-redux";
import { store } from "./store";

import { CookiesProvider } from "react-cookie";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoginContext } from "./context/loginModalContext";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

import LeagalLinkPopup from "./components/popup/leagal-links";

export default function RootLayout({ children }) {
  const [firstVisit, setFirstVisit] = useState(true);
  const {
    isOpen: isDisclaimerOpen,
    onOpen: onDisclaimerOpen,
    onClose: onDisclaimerClose,
  } = useDisclosure();
  const { isOpen: isPolicyOpen, onOpen: onPolicyOpen, onClose: onPolicyClose } = useDisclosure();

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
                              p={{ base: "1.5rem", md: "2rem" }}
                              borderRadius="md"
                              gap={{ base: "1rem", md: "1.5rem" }}
                              direction="column"
                              align="left"
                            >
                              <Flex gap="1rem"><Image src="/cookies.svg" alt="cookies icon" w="40px" h="auto" />
                                <Heading size="lg">We use cookies</Heading></Flex>
                              <Flex
                                gap="2rem"
                                direction="column"
                                justify="center"
                              >
                                <Text align={{ base: "left", md: "left" }}>
                                  We use cookies to provide the best possible
                                  experience. By clicking continue, you agree to
                                  Librum&apos;s <Link color="#946bdd" focusBorderColor="transparent"
                                    focusBoxShadow="none" _focusVisible={"none"} onClick={() => {
                                      onPolicyOpen()
                                      onDisclaimerClose()
                                    }}>policies</Link>.
                                </Text>
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
                      <LeagalLinkPopup isOpen={isPolicyOpen}
                        onClose={onPolicyClose} />
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
