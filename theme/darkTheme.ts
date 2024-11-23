import { lightTheme, LightTheme } from "./lightTheme";

const palette = {
  background: "#09090B", // HSL(240, 10%, 3.9%)
  foreground: "#FAFAFA", // HSL(0, 0%, 98%)
  card: "#09090B", // HSL(240, 10%, 3.9%)
  cardForeground: "#FAFAFA", // HSL(0, 0%, 98%)
  popover: "#09090B", // HSL(240, 10%, 3.9%)
  popoverForeground: "#FAFAFA", // HSL(0, 0%, 98%)
  primary: "#FAFAFA", // HSL(0, 0%, 98%)
  primaryForeground: "#18181B", // HSL(240, 5.9%, 10%)
  secondary: "#27272A", // HSL(240, 3.7%, 15.9%)
  secondaryForeground: "#FAFAFA", // HSL(0, 0%, 98%)
  muted: "#27272A", // HSL(240, 3.7%, 15.9%)
  mutedForeground: "#A1A1AA", // HSL(240, 5%, 64.9%)
  accent: "#27272A", // HSL(240, 3.7%, 15.9%)
  accentForeground: "#FAFAFA", // HSL(0, 0%, 98%)
  destructive: "#7F1D1D", // HSL(0, 62.8%, 30.6%)
  destructiveForeground: "#FAFAFA", // HSL(0, 0%, 98%)
  border: "#27272A", // HSL(240, 3.7%, 15.9%)
  input: "#27272A", // HSL(240, 3.7%, 15.9%)
  ring: "#D4D4D8", // HSL(240, 4.9%, 83.9%)
};

export const darkTheme: LightTheme = {
  ...lightTheme,
  colors: {
    ...palette,
  },
};

export type DarkTheme = typeof darkTheme;
