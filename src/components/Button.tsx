import { va } from "variance-authority";

import { BoxProps } from "./Box";
import { Text } from "./Text";
import { Touchable } from "./Touchable";

type Props = BoxProps & {
  intent?: "primary" | "secondary";
  isDisabled?: boolean;
  onPress?: () => void;
  size?: "large" | "medium" | "small";
  title: string;
};

export const Button = ({
  intent,
  isDisabled,
  onPress,
  size,
  title,
  ...rest
}: Props) => {
  return (
    <Touchable
      {...makeVaraintProps({ intent, isDisabled, size }, rest)}
      disabled={isDisabled}
      onPress={onPress}
    >
      <Text variant="buttonTitle">{title}</Text>
    </Touchable>
  );
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
