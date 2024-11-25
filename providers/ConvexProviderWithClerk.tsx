import { useAuth } from "@clerk/clerk-expo";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk as ConvexProvider } from "convex/react-clerk";

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  throw new Error(
    "Missing Convex URL. Please set EXPO_PUBLIC_CONVEX_URL in your .env"
  );
}

const convex = new ConvexReactClient(convexUrl, {
  unsavedChangesWarning: false,
});

interface ConvexProviderWithClerkProps {
  children: React.ReactNode;
}

export const ConvexProviderWithClerk = ({
  children,
}: ConvexProviderWithClerkProps) => {
  return (
    <ConvexProvider client={convex} useAuth={useAuth}>
      {children}
    </ConvexProvider>
  );
};
