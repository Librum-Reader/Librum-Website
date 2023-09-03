import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const defaultVariant = definePartsStyle({
  dialog: {
    borderRadius: "6px",
    bg: "bg-modal-default",
    textColor: "text-default",
  },
});

const legalVariant = definePartsStyle({
  dialog: {
    borderRadius: "lg",
    bg: "bg-modal-default",
    textColor: "text-default",
  },
  header: {
    textColor: "#946BDE",
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { defaultVariant, legalVariant },
});
