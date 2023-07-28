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
        "nav-default": "#946BDE",
        "btn-primary-bg": "#946BDE",
        "btn-secondary-border": "#946BDE",
        "btn-secondary-text": "white",
        "heading-default": "#946BDE",
      },
      dark: {
        "bg-default": "#282c34",
        "text-default": "white",
        "nav-default": "white",
        "heading-default": "#946BDE",
        "btn-secondary-text": "white",
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
      "nav-default": {
        default: tokens.colors.light["nav-default"],
        _dark: tokens.colors.dark["nav-default"],
      },
      "btn-primary-bg": {
        default: tokens.colors.light["btn-primary-bg"],
      },
      "btn-secondary-border": {
        default: tokens.colors.light["btn-secondary-border"],
      },
      "btn-secondary-text": {
        default: tokens.colors.light["btn-secondary-text"],
        _dark: tokens.colors.dark["btn-secondary-text"],
      },
      "heading-default": {
        default: tokens.colors.light["heading-default"],
        _dark: tokens.colors.light["heading-default"],
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
            bg: "btn-primary-bg",
            textColor: "white",
            fontSize: "sm",
            borderRadius: "3px",
          },
          secondary: {
            bg: "transparent",
            textColor: "btn-secondary-text",
            fontSize: "sm",
            borderWidth: "1px",
            borderColor: "btn-secondary-border",
            borderRadius: "3px",
          },
          showcase: {
            bg: "transparent",
            textColor: "white",
            fontSize: "sm",
            borderWidth: "1px",
            borderColor: "btn-secondary-border",
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
            textColor: "nav-default",
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
            bg: "btn-primary-bg",
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
          textColor: "heading-default",
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
