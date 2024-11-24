import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { ClerkProvider } from "./ClerkProvider";
import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ClerkProvider>{children}</ClerkProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
