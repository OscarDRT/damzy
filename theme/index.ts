import { DarkTheme } from "./darkTheme";
import { LightTheme } from "./lightTheme";

export * from "./darkTheme";
export * from "./lightTheme";

export type Theme = LightTheme | DarkTheme;
