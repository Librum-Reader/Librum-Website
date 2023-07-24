"use client";

import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { modalTheme } from "./styles/modalTheme";

export function Providers({ children }) {
  const tokens = {
    colors: {
      light: {
        "bg-default": "white",
        "text-default": "#47478f",
      },
      dark: {
        "bg-default": "#282c34",
        "text-default": "white",
      },
    },
  };

  const semanticTokens = {
    colors: {
      "bg-default": {
        default: tokens.colors.light["bg-default"],
        _dark: tokens.colors.dark["bg-default"],
      },
      "text-default": {
        default: tokens.colors.light["text-default"],
        _dark: tokens.colors.dark["text-default"],
      },
    },
  };

  const theme = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
    semanticTokens,
    fonts: {
      body: `'Lato', sans-serif`,
      heading: `'Lato', sans-serif`,
      text: `'Lato', sans-serif`,
    },
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: "text-default",
          },
        },
      },
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
      Modal: modalTheme,
      Heading: {
        baseStyle: {
          textColor: "#47478f",
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
