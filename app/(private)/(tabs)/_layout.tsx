import { HapticTab } from "@/components/HapticTab";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@clerk/clerk-expo";
import { Tabs } from "expo-router";
import { House, User } from "lucide-react-native";
import { Alert } from "react-native";

const Layout = () => {
  const { colors } = useTheme();
  const { signOut } = useAuth();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.ring,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.muted,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
          headerRight: () => (
            <Button
              label="Log out"
              variant="ghost"
              onPress={() => {
                Alert.alert(
                  "Log Out",
                  "Are you sure you want to log out?",
                  [
                    { text: "Cancel", style: "cancel" },
                    { text: "OK", onPress: () => signOut() },
                  ],
                  { cancelable: true }
                );
              }}
            />
          ),
          //headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};
export default Layout;
