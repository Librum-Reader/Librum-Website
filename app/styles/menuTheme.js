import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    bg: "#282c34",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    bg: "#282c34",
    color: "gray.200",
    _hover: {
      bg: "#946bde",
    },
    _focus: {
      bg: "#946bde",
    },
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
