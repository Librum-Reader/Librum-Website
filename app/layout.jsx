"use client";
import { Inter } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import Container from "./components/ui/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { create } from "domain";
import { store } from "./store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useSelector } from "react-redux";
import { buttonStyles as Button } from "./styles/buttonStyles";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
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
                    <Navbar />
                    {children}
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
