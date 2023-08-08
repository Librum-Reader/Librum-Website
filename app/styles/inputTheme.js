import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const defaultVariant = definePartsStyle({
  field: {
    color: "text-default",
    background: "bg-input-default",
    border: "1px solid",
    borderColor: "border-input-default",
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { defaultVariant },
});
