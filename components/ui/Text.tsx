import { Theme } from "@/theme";
import { createText } from "@shopify/restyle";

/**
 * A primitive text component that can be styled using the theme's properties.
 * Built using Shopify's Restyle library, Text accepts all standard React Native
 * Text props plus additional theme-based styling props.
 *
 * @example
 * <Text variant="body" color="text">
 *   Hello World
 * </Text>
 *
 * @see https://github.com/Shopify/restyle
 */

export const Text = createText<Theme>();
