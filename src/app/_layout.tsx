import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { theme } from "src/theme";
import { RootStackParamList } from "src/types/navigation";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Stack />
    </ThemeProvider>
  );
}
