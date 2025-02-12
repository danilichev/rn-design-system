import React from "react";
import { ScrollView } from "react-native";

import { Box } from "src/components/Box";
import { Button } from "src/components/Button";
import { StackScreenOptions } from "src/components/navigation/StackScreenOptions";

const ButtonComponentScreen = () => {
  return (
    <>
      <StackScreenOptions title="Button" />
      <ScrollView>
        <Box
          alignItems="center"
          backgroundColor="mainBackground"
          flex={1}
          padding="md"
        >
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
      </ScrollView>
    </>
  );
};

export default ButtonComponentScreen;
