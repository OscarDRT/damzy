import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { ClerkProvider } from "./ClerkProvider";
import { ConvexProviderWithClerk } from "./ConvexProviderWithClerk";
import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ClerkProvider>
          <ConvexProviderWithClerk>{children}</ConvexProviderWithClerk>
        </ClerkProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
