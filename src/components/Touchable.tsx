import {
  BackgroundColorProps,
  BorderProps,
  SpacingProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  spacing,
  useRestyle,
} from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Theme } from "../theme";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

type Props = RestyleProps & TouchableOpacityProps;

export const Touchable = (props: Props) => {
  const extendedProps = useRestyle(restyleFunctions, props);

  return <TouchableOpacity {...extendedProps} />;
};
