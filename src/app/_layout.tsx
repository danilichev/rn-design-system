import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { theme } from "src/theme";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Stack />
    </ThemeProvider>
  );
}
