import { lightTheme, LightTheme } from "./lightTheme";

const palette = {
  background: "#000A19", // HSL(224, 71.4%, 4.1%)
  foreground: "#F6FBFF", // HSL(210, 20%, 98%)
  card: "#000A19", // HSL(224, 71.4%, 4.1%)
  cardForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  popover: "#000A19", // HSL(224, 71.4%, 4.1%)
  popoverForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  primary: "#7A5FFF", // HSL(263.4, 70%, 50.4%)
  primaryForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  secondary: "#2A3B4D", // HSL(215, 27.9%, 16.9%)
  secondaryForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  muted: "#2A3B4D", // HSL(215, 27.9%, 16.9%)
  mutedForeground: "#A3B0C0", // HSL(217.9, 10.6%, 64.9%)
  accent: "#2A3B4D", // HSL(215, 27.9%, 16.9%)
  accentForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  destructive: "#A52A2A", // HSL(0, 62.8%, 30.6%)
  destructiveForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  border: "#2A3B4D", // HSL(215, 27.9%, 16.9%)
  input: "#2A3B4D", // HSL(215, 27.9%, 16.9%)
  ring: "#7A5FFF", // HSL(263.4, 70%, 50.4%)
};

export const darkTheme: LightTheme = {
  ...lightTheme,
  colors: {
    ...palette,
  },
};

export type DarkTheme = typeof darkTheme;
