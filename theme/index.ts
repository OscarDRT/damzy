import { DarkTheme, darkTheme } from "./darkTheme";
import { LightTheme, lightTheme } from "./lightTheme";

export * from "./darkTheme";
export * from "./lightTheme";

export type Theme = LightTheme | DarkTheme;

export type ThemeType = typeof lightTheme | typeof darkTheme;
