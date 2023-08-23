"use client";

import "@fontsource/lato";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { modalTheme } from "./styles/modalTheme";
import { inputTheme } from "./styles/inputTheme";
import { drawerTheme } from "./styles/drawerTheme";

export function Providers({ children }) {
  const tokens = {
    colors: {
      light: {
        "mobile-nav-active": "#F0F0FF",
        "bg-default": "white",
        "text-default": "black",
        "nav-home": "white",
        "nav-default": "black",
        "btn-primary-bg": "#946BDE",
        "btn-secondary-border": "#946BDE",
        "btn-secondary-text": "#946BDE",
        "heading-default": "#946BDE",
        "bg-input-default": "white",
        "border-input-default": "#e2e8f0",
        "bg-modal-default": "white",
        "legal-text": "black",
        "legal-title": "#946BDE",
      },
      dark: {
        "mobile-nav-active": "#3c4047",
        "bg-default": "#282c34",
        "text-default": "white",
        "nav-default": "white",
        "heading-default": "#946BDE",
        "btn-secondary-text": "#946BDE",
        "bg-input-default": "#282c34",
        "border-input-default": "gray.600",
        "bg-modal-default": "#282c34",
        "legal-text": "white",
        "legal-title": "#946BDE",
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
        _dark: tokens.colors.dark["heading-default"],
      },
      "bg-input-default": {
        default: tokens.colors.light["bg-input-default"],
        _dark: tokens.colors.dark["bg-input-default"],
      },
      "border-input-default": {
        default: tokens.colors.light["border-input-default"],
        _dark: tokens.colors.dark["border-input-default"],
      },
      "bg-modal-default": {
        default: tokens.colors.light["bg-modal-default"],
        _dark: tokens.colors.dark["bg-modal-default"],
      },
      "legal-text": {
        default: tokens.colors.light["legal-text"],
        _dark: tokens.colors.dark["legal-text"],
      },
      "legal-title": {
        default: tokens.colors.light["legal-title"],
        _dark: tokens.colors.dark["legal-title"],
      },
      "mobile-nav-active": {
        default: tokens.colors.light["mobile-nav-active"],
        _dark: tokens.colors.dark["mobile-nav-active"],
      },
    },
  };

  const theme = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
    semanticTokens,
    styles: {
      global: {
        body: {
          bg: "bg-default",
          letterSpacing: "1px",
          lineHeight: "1.6em",
        },
      },
    },
    fonts: {
      body: `'Lato', sans-serif`,
      heading: `'Lato', sans-serif`,
      text: `'Lato', sans-serif`,
    },
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: "#946BDE",
          },
          track: {
            borderRadius: "md",
          },
        },
      },
      Button: {
        baseStyle: {
          fontFamily: `'Lato', sans-serif`,
          letterSpacing: ".15em",
          fontWeight: "700",
        },
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
          navActive: {
            bg: "transparent",
            fontSize: "md",
            textColor: "#946BDE",
          },
          loginButton: {
            bg: "btn-primary-bg",
            borderRadius: "5px",
            paddingX: "26px",
            paddingY: "23px",
            textColor: "white",
            fontSize: "sm",
          },
          drawerActive: {
            bg: "mobile-nav-active",
          },
          drawerButton: {
            bg: "bg-default",
          },
        },
      },
      Modal: modalTheme, // Modals have to have a variant defined for custom styles to work, a known bug in Chakra
      Drawer: drawerTheme,
      Heading: {
        baseStyle: {
          textColor: "heading-default",
        },
      },
      Text: {
        baseStyle: {
          textColor: "text-default",
          letterSpacing: "1px",
          lineHeight: "1.6em",
        },
      },
      Input: inputTheme, // Same as modal, need a pre-defined variant
      Textarea: {
        baseStyle: {
          bg: "bg-input-default",
          border: "1px solid",
          borderColor: "border-input-default",
          textColor: "text-default",
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
