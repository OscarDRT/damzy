import { Providers } from "@/providers";
import { useAuth, useUser } from "@clerk/clerk-expo";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const InitalLayout = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    const inTabsGroup = segments[0] === "(private)";

    if (isSignedIn && inTabsGroup) {
      router.replace("/(private)");
    } else if (!isSignedIn && inTabsGroup) {
      router.replace("/(public)");
    }
  }, [isSignedIn]);

  return <Slot />;
};

const RootLayoutNav = () => {
  return (
    <Providers>
      <InitalLayout />
    </Providers>
  );
};

export default RootLayoutNav;
