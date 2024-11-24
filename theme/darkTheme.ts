import { colors } from "@/constants/Colors";
import { lightTheme, LightTheme } from "./lightTheme";

export const darkTheme: LightTheme = {
  ...lightTheme,
  colors: {
    ...colors.dark,
  },
};

export type DarkTheme = typeof darkTheme;
