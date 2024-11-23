import { createTheme } from "@shopify/restyle";

const palette = {
  background: "#ffffff", // hsl(0, 0%, 100%)
  foreground: "#1f1f1f", // hsl(240, 10%, 3.9%)
  card: "#ffffff", // hsl(0, 0%, 100%)
  cardForeground: "#1f1f1f", // hsl(240, 10%, 3.9%)
  primary: "#1a1a1a", // hsl(240, 5.9%, 10%)
  secondary: "#f3f3f3", // hsl(240, 4.8%, 95.9%)
  muted: "#f3f3f3", // hsl(240, 4.8%, 95.9%)
  accent: "#f3f3f3", // hsl(240, 4.8%, 95.9%)
  destructive: "#eb4034", // hsl(0, 84.2%, 60.2%)
  border: "#e5e5e5", // hsl(240, 5.9%, 90%)
  input: "#e5e5e5", // hsl(240, 5.9%, 90%)
  ring: "#1a1a1a", // hsl(240, 5.9%, 10%)
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
