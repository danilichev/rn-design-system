import { createText } from "@shopify/restyle";
import { ComponentProps } from "react";

import { Theme } from "src/theme";

export const Text = createText<Theme>();

export type TextProps = ComponentProps<typeof Text>;
