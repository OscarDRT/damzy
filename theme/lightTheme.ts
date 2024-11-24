import { scale } from "@/utils/responsive";
import { createTheme } from "@shopify/restyle";

const palette = {
  transparent: "transparent",
  background: "#FFFFFF", // HSL(0, 0%, 100%)
  foreground: "#00210A", // HSL(224, 71.4%, 4.1%)
  card: "#FFFFFF", // HSL(0, 0%, 100%)
  cardForeground: "#00210A", // HSL(224, 71.4%, 4.1%)
  popover: "#FFFFFF", // HSL(0, 0%, 100%)
  popoverForeground: "#00210A", // HSL(224, 71.4%, 4.1%)
  primary: "#684BDB", // HSL(262.1, 83.3%, 57.8%)
  primaryForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  secondary: "#E9EEF8", // HSL(220, 14.3%, 95.9%)
  secondaryForeground: "#1B2D3E", // HSL(220.9, 39.3%, 11%)
  muted: "#E9EEF8", // HSL(220, 14.3%, 95.9%)
  mutedForeground: "#6F7B8B", // HSL(220, 8.9%, 46.1%)
  accent: "#E9EEF8", // HSL(220, 14.3%, 95.9%)
  accentForeground: "#1B2D3E", // HSL(220.9, 39.3%, 11%)
  destructive: "#EF4444", // HSL(0, 84.2%, 60.2%)
  destructiveForeground: "#F6FBFF", // HSL(210, 20%, 98%)
  border: "#D6DEE8", // HSL(220, 13%, 91%)
  input: "#D6DEE8", // HSL(220, 13%, 91%)
  ring: "#684BDB", // HSL(262.1, 83.3%, 57.8%)
};

const fonts = {
  regular: "Montserrat_400Regular",
  medium: "Montserrat_500Medium",
  semiBold: "Montserrat_600SemiBold",
  bold: "Montserrat_700Bold",
};

export const lightTheme = createTheme({
  colors: {
    ...palette,
  },
  fonts,
  spacing: {
    xs: scale(4),
    s: scale(8),
    m: scale(12),
    l: scale(16),
    xl: scale(20),
    xxl: scale(24),
  },
  borderRadii: {
    s: scale(4),
    m: scale(8),
    l: scale(12),
  },
  textVariants: {
    defaults: {
      fontSize: scale(17),
      lineHeight: scale(22),
      fontFamily: "Montserrat_400Regular",
      color: "foreground",
    },
    largeTitle: {
      fontSize: scale(36),
      lineHeight: scale(40),
      fontFamily: "Montserrat_700Bold",
    },
    title1: {
      fontSize: scale(30),
      lineHeight: scale(34),
      fontFamily: "Montserrat_600SemiBold",
    },
    title2: {
      fontSize: scale(22),
      lineHeight: scale(28),
      fontFamily: "Montserrat_600SemiBold",
    },
    title3: {
      fontSize: scale(20),
      lineHeight: scale(26),
      fontFamily: "Montserrat_500Medium",
    },
    heading: {
      fontSize: scale(17),
      lineHeight: scale(22),
      fontFamily: "Montserrat_600SemiBold",
    },
    callout: {
      fontSize: scale(16),
      lineHeight: scale(20),
      fontFamily: "Montserrat_400Regular",
    },
    subhead: {
      fontSize: scale(15),
      lineHeight: scale(22),
      fontFamily: "Montserrat_500Medium",
    },
    footnote: {
      fontSize: scale(13),
      lineHeight: scale(18),
      fontFamily: "Montserrat_400Regular",
      color: "mutedForeground",
    },
    caption1: {
      fontSize: scale(12),
      lineHeight: scale(16),
      fontFamily: "Montserrat_400Regular",
      color: "mutedForeground",
    },
    caption2: {
      fontSize: scale(11),
      lineHeight: scale(14),
      fontFamily: "Montserrat_400Regular",
      color: "mutedForeground",
    },
  },
  buttonVariants: {
    defaults: {
      backgroundColor: "primary",
      borderRadius: "m",
      height: scale(40),
      paddingHorizontal: "l",
      justifyContent: "center",
      alignItems: "center",
    },
    destructive: {
      backgroundColor: "destructive",
      borderRadius: "m",
    },
    outline: {
      borderWidth: 1,
      borderColor: "border",
      backgroundColor: "background",
    },
    secondary: {
      backgroundColor: "secondary",
      borderRadius: "m",
    },
    ghost: {
      backgroundColor: "transparent",
      borderRadius: "m",
    },
    link: {
      backgroundColor: "transparent",
      textDecorationLine: "underline",
    },
    disabled: {
      backgroundColor: "muted",
    },
  },
});

export type LightTheme = typeof lightTheme;
