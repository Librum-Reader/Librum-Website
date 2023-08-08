import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const defaultVariant = definePartsStyle({
  dialog: {
    borderRadius: "sm",
    bg: "bg-modal-default",
    textColor: "text-default",
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { defaultVariant },
});
