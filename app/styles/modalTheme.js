import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const defaultVariant = definePartsStyle({
  dialog: {
    borderRadius: "6px",
    bg: "bg-modal-default",
    textColor: "text-default",
    maxWidth: "470px",
    padding: "0 0.5rem",
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

const emailConfirmation = definePartsStyle({
  dialog: {
    maxWidth: "600px",
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { defaultVariant, legalVariant, emailConfirmation },
});
