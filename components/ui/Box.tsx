import { Theme } from "@/theme";
import { createBox } from "@shopify/restyle";

/**
 * A primitive component that can be styled using the theme's properties.
 * Built using Shopify's Restyle library, Box accepts all standard React Native
 * View props plus additional theme-based styling props.
 *
 * @example
 * <Box padding="m" backgroundColor="background">
 *   <Text>Content</Text>
 * </Box>
 *
 * @see https://github.com/Shopify/restyle
 */

export const Box = createBox<Theme>();
