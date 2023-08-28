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
    size: "sm",
  },
});

const editUserInfo = definePartsStyle({
  field: {
    color: "text-default",
    background: "user-info-bg",
    border: "1px",
    borderColor: "user-profile-border",
    m: "0",
    pl: ".8rem",
    py: ".3rem",
    h: "auto",
    w: "100%",
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { defaultVariant, editUserInfo },
});
