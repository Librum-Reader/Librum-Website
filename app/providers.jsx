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
        "text-default": "#946BDE",
        "nav-home": "white",
        "nav-purple": "#946BDE",
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
      "nav-home": {
        default: tokens.colors.light["nav-home"],
      },
      "nav-purple": {
        default: tokens.colors.light["nav-purple"],
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
            bg: "text-default",
            textColor: "white",
            fontSize: "sm",
            borderRadius: "3px",
          },
          secondary: {
            bg: "transparent",
            textColor: "text-default",
            fontSize: "sm",
            borderWidth: "1px",
            borderColor: "text-default",
            borderRadius: "3px",
          },
          navLinkHome: {
            bg: "transparent",
            fontSize: "md",
            textColor: "white",
          },
          navLink: {
            bg: "transparent",
            fontSize: "md",
            textColor: "nav-purple",
          },
          navButtonHome: {
            bg: "white",
            borderRadius: "3px",
            paddingX: "20px",
            textColor: "white",
            fontSize: "md",
          },
          navButton: {
            bg: "text-default",
            borderRadius: "3px",
            paddingX: "20px",
            textColor: "nav-purple",
            fontSize: "md",
          },
          loginButton: {
            bg: "text-default",
            borderRadius: "3px",
            paddingX: "20px",
            textColor: "white",
            fontSize: "md",
          },
        },
      },
      Modal: modalTheme,
      Heading: {
        baseStyle: {
          textColor: "text-default",
        },
      },
      Text: {
        baseStyle: {
          textColor: "text-default",
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
