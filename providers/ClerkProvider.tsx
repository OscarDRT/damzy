import { tokenCache } from "@/utils/cache";
import { ClerkProvider as Clerk, ClerkLoaded } from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Clerk publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>{children}</ClerkLoaded>
    </Clerk>
  );
};
