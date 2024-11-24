import { useColorScheme } from "@/hooks/useColorScheme";
import { darkTheme, lightTheme } from "@/theme";
import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Provides the theme to the app using Restyle's ThemeProvider
 * @param children - The components to wrap with the theme
 * @returns The wrapped components with the theme applied
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const colorScheme = useColorScheme();

  return (
    <RestyleThemeProvider
      theme={colorScheme === "dark" ? darkTheme : lightTheme}
    >
      {children}
    </RestyleThemeProvider>
  );
};
