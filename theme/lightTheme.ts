import { createTheme } from "@shopify/restyle";

const palette = {
  background: "#FFFFFF", // HSL(0, 0%, 100%)
  foreground: "#09090B", // HSL(240, 10%, 3.9%)
  card: "#FFFFFF", // HSL(0, 0%, 100%)
  cardForeground: "#09090B", // HSL(240, 10%, 3.9%)
  popover: "#FFFFFF", // HSL(0, 0%, 100%)
  popoverForeground: "#09090B", // HSL(240, 10%, 3.9%)
  primary: "#18181B", // HSL(240, 5.9%, 10%)
  primaryForeground: "#FAFAFA", // HSL(0, 0%, 98%)
  secondary: "#F3F3F5", // HSL(240, 4.8%, 95.9%)
  secondaryForeground: "#18181B", // HSL(240, 5.9%, 10%)
  muted: "#F3F3F5", // HSL(240, 4.8%, 95.9%)
  mutedForeground: "#717179", // HSL(240, 3.8%, 46.1%)
  accent: "#F3F3F5", // HSL(240, 4.8%, 95.9%)
  accentForeground: "#18181B", // HSL(240, 5.9%, 10%)
  destructive: "#EF4444", // HSL(0, 84.2%, 60.2%)
  destructiveForeground: "#FAFAFA", // HSL(0, 0%, 98%)
  border: "#E4E4E7", // HSL(240, 5.9%, 90%)
  input: "#E4E4E7", // HSL(240, 5.9%, 90%)
  ring: "#18181B", // HSL(240, 5.9%, 10%)
};

export const lightTheme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {},
  },
});

export type LightTheme = typeof lightTheme;
