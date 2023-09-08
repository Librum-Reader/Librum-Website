import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontSize: "sm",
  },
  control: {
    boxSize: "1.1rem",
    borderRadius: 4,
    transition: "all 0.1s",
    _checked: {
      bg: "#946bde",
      borderColor: "#946bde",

      _hover: {
        bg: "#6b46c1",
        borderColor: "#6b46c1",
      },
    },
    _focusVisible: {
      boxShadow: 0,
    },
  },
  icon: {
    boxSize: 2,
    color: "#fff",
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
