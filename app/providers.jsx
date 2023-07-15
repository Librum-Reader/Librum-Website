"use client";

import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export function Providers({ children }) {
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          primary: {
            bg: "#47478f",
            textColor: "white",
            fontSize: "sm",
            borderRadius: "3px",
          },
          secondary: {
            bg: "transparent",
            textColor: "#47478f",
            fontSize: "sm",
            borderWidth: "1px",
            borderColor: "#47478f",
            borderRadius: "3px",
          },
          navLink: {
            bg: "transparent",
            fontSize: "sm",
            textColor: "#47478f",
          },
          navButton: {
            bg: "#47478f",
            borderRadius: "3px",
            paddingX: "20px",
            textColor: "white",
            fontSize: "sm",
          },
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
