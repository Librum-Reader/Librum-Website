import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: "blackAlpha.200", //change the background
  },
  dialog: {
    borderRadius: "sm",
    bg: `white`,
    textColor: `#47478f`,
  },
  footer: {
    bg: `white`,
    borderRadius: "sm",
    textColor: `#47478f`,
  },
});

const contact = definePartsStyle({
  dialog: {
    bg: "red",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  contact,
});
