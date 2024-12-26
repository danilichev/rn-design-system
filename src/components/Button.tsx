import { TouchableOpacity } from "react-native";

import { va } from "../utils/va";
import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

type Props = BoxProps & {
  intent?: "primary" | "secondary";
  isDisabled?: boolean;
  onPress?: () => void;
  size?: "large" | "medium" | "small";
  title: string;
};

type VaConfig = {
  intent: Record<"primary" | "secondary", BoxProps>;
  isDisabled: Record<"true" | "false", BoxProps>;
  size: Record<"large" | "medium" | "small", BoxProps>;
};

const makeVaraintProps = va<BoxProps, VaConfig>({
  base: { backgroundColor: "greenPrimary", padding: "md", borderRadius: "md" },
  variants: {
    intent: {
      primary: { backgroundColor: "greenPrimary" },
      secondary: { backgroundColor: "purplePrimary" },
    },
    isDisabled: {
      true: { backgroundColor: "gray" },
      false: {},
    },
    size: {
      large: { padding: "lg" },
      medium: { padding: "md" },
      small: { padding: "sm" },
    },
  },
  defaultVariants: { intent: "primary", isDisabled: false, size: "medium" },
});

export const Button = ({
  intent,
  isDisabled,
  onPress,
  size,
  title,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <Box {...makeVaraintProps({ intent, isDisabled, size }, rest)}>
        <Text variant="buttonTitle">{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};
