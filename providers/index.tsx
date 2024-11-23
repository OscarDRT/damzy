import { ClerkProvider } from "./ClerkProvider";
import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <ClerkProvider>{children}</ClerkProvider>
    </ThemeProvider>
  );
};
