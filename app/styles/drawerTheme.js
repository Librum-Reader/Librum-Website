import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const defaultVariant = definePartsStyle({
  dialog: {
    borderTopLeftRadius: "xl",
    borderBottomLeftRadius: "xl",
    bg: "bg-modal-default",
    textColor: "text-default",
  },
  header: {
    // pl: "24px",
    paddingInlineStart: "0",
    paddingInlineEnd: "0",
    paddingTop: "0",
  },
  body: {},
});

export const drawerTheme = defineMultiStyleConfig({
  variants: { defaultVariant },
});
