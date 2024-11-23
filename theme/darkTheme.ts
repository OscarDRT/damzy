import { lightTheme, LightTheme } from "./lightTheme";

const palette = {
  background: "#1f1f1f", // hsl(240, 10%, 3.9%)
  foreground: "#fafafa", // hsl(0, 0%, 98%)
  card: "#1f1f1f", // hsl(240, 10%, 3.9%)
  cardForeground: "#fafafa", // hsl(0, 0%, 98%)
  primary: "#fafafa", // hsl(0, 0%, 98%)
  secondary: "#2b2b2b", // hsl(240, 3.7%, 15.9%)
  muted: "#2b2b2b", // hsl(240, 3.7%, 15.9%)
  accent: "#2b2b2b", // hsl(240, 3.7%, 15.9%)
  destructive: "#993d2d", // hsl(0, 62.8%, 30.6%)
  border: "#2b2b2b", // hsl(240, 3.7%, 15.9%)
  input: "#2b2b2b", // hsl(240, 3.7%, 15.9%)
  ring: "#d4d4d4", // hsl(240, 4.9%, 83.9%)
};

export const darkTheme: LightTheme = {
  ...lightTheme,
  colors: {
    ...palette,
  },
};

export type DarkTheme = typeof darkTheme;
