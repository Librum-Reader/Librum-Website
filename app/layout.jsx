"use client";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Container from "./components/ui/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { create } from "domain";
import { store } from "./store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const theme = extendTheme({
  fonts: {
    body: lato,
  },
  dialog: {
    borderRadius: "md",
  },
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <CookiesProvider>
              <ChakraProvider>
                <Container>
                  <Navbar />
                  {children}
                </Container>
              </ChakraProvider>
            </CookiesProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
