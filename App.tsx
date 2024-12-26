import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";

import { Text } from "./src/components/Text";
import { theme } from "./src/theme";
import { Box } from "./src/components/Box";
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Box
        alignItems="center"
        backgroundColor="mainBackground"
        flex={1}
        justifyContent="center"
      >
        <Text marginBottom="md" variant="header">
          Design System
        </Text>
        <Button marginBottom="md" title="Default" />
        <Button intent="secondary" marginBottom="md" title="Secondary" />
        <Button isDisabled marginBottom="md" title="Disabled" />
        <Button marginBottom="md" title="Custom" backgroundColor="black" />
        <Button marginBottom="md" size="large" title="Large" />
        <Button
          intent="secondary"
          marginBottom="md"
          size="large"
          title="Large Secondary"
        />
      </Box>
    </ThemeProvider>
  );
}
