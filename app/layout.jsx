"use client";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import { Flex } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Features from "./components/sections/Features";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const theme = extendTheme({
  fonts: {
    body: lato,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex direction="column" justifyContent="center" className="layout">
            <Navbar />
            {children}
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
