import { Stack } from "expo-router";
import { ComponentProps } from "react";

type StackScreenOptionsProps = ComponentProps<typeof Stack.Screen>["options"];

export const StackScreenOptions = (props: StackScreenOptionsProps) => {
  return (
    <Stack.Screen
      options={{ headerBackButtonDisplayMode: "minimal", ...props }}
    />
  );
};
