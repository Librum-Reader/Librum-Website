"use client";
import { Inter } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import Container from "./components/ui/Container";
import Footer from "./components/sections/Footer";

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
} from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Providers } from "./providers";

import { store } from "./store";
import { Provider } from "react-redux";

import { CookiesProvider } from "react-cookie";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

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

  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode="light" />
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
                    >
                      <ModalOverlay />
                      <ModalContent
                        alignContent="center"
                        maxW="1000px"
                        w="auto"
                        bg="transparent"
                        boxShadow="0"
                      >
                        <ModalBody alignContent="center">
                          <Flex
                            w="800px"
                            justify="space-between"
                            bg="white"
                            p=".5rem"
                            borderRadius="md"
                            gap="2rem"
                          >
                            <Card
                              borderRadius="md"
                              w="auto"
                              bgGradient="linear(to-r, #37366d, #4e4d8d )"
                            >
                              <CardBody>
                                <Flex
                                  direction="column"
                                  align="center"
                                  justify="space-between"
                                  h="100%"
                                >
                                  <Heading size="lg">In Development</Heading>
                                  <Image
                                    src="/development.svg"
                                    w="400px"
                                    h="auto"
                                  />
                                </Flex>
                              </CardBody>
                            </Card>
                            <Flex w="100%" direction="column" gap="1.5rem">
                              <Heading size="md">Welcome!</Heading>
                              <Text>
                                Our website and app are currently under very
                                active development. Because of this, some things
                                might not work as expected. Should you encounter
                                any problems, please feel free to contact us at{" "}
                                <Link href="mailto:help@librumreader.com">
                                  help@librumreader.com
                                </Link>
                              </Text>
                              <Text>
                                In addition, this website uses minimal cookies
                                to keep track of things such as whether or not a
                                user is currently logged in. By continuing, you
                                agree to the following policies:
                              </Text>
                              <Flex
                                w="100%"
                                justifyContent="center"
                                gap="1.5rem"
                              >
                                <Link href="/termsofservice">
                                  Terms of Service
                                </Link>
                                <Link href="/cookies">Cookies Policy</Link>
                                <Link href="/privacypolicy">
                                  Privacy Policy
                                </Link>
                              </Flex>
                              <Flex justify="flex-end" gap="1rem">
                                <Button
                                  variant="primary"
                                  alignSelf="flex-end"
                                  onClick={onDisclaimerClose}
                                >
                                  Accept and continue
                                </Button>
                                <Button
                                  variant="secondary"
                                  alignSelf="flex-end"
                                  onClick={onDisclaimerClose}
                                >
                                  Decline
                                </Button>
                              </Flex>
                            </Flex>
                          </Flex>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                    <Navbar />
                    {children}
                    <Footer />
                  </Container>
                </Providers>
              </CookiesProvider>
            </QueryClientProvider>
          </Provider>
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
