import { DarkTheme, LightTheme } from "@/theme";
import { useTheme as useRestyleTheme } from "@shopify/restyle";

/**
 * Custom hook to access the theme using Restyle's useTheme hook
 * @returns The theme object
 */
export const useTheme = () => useRestyleTheme<LightTheme | DarkTheme>();
