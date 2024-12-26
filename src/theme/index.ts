import { createTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  gray: "gray",
  white: "#F0F2F3",
};

export const theme = createTheme({
  colors: {
    ...palette,
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  borderRadii: {
    sm: 4,
    md: 16,
    lg: 24,
    xl: 40,
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
  },
  textVariants: {
    buttonTitle: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
    },
    defaults: {},
  },
});

export type Theme = typeof theme;
