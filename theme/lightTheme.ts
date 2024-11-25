import { colors } from "@/constants/Colors";
import { scale } from "@/utils/responsive";
import { createTheme } from "@shopify/restyle";

const fonts = {
  regular: "Montserrat_400Regular",
  medium: "Montserrat_500Medium",
  semiBold: "Montserrat_600SemiBold",
  bold: "Montserrat_700Bold",
};

export const lightTheme = createTheme({
  colors: {
    ...colors.light,
  },
  fonts,
  spacing: {
    none: 0,
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
  cardVariants: {
    defaults: {
      backgroundColor: "card",
      borderRadius: "m",
      padding: "l",
      borderWidth: 1,
      borderColor: "border",
    },
  },
});

export type LightTheme = typeof lightTheme;
