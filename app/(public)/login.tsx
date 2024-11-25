import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/hooks/useTheme";
import { scale } from "@/utils/responsive";
import { useOAuth } from "@clerk/clerk-expo";
import { ChevronRight } from "lucide-react-native";

const LoginScreen = () => {
  const { colors } = useTheme();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await googleAuth();
      console.log("googleAuth createdSessionId", createdSessionId);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.error("googleAuth error", error);
    }
  };

  return (
    <Container justifyContent="center" alignItems="center" gap="l">
      <Text variant="title3">How would you like to login?</Text>

      <Card
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        onPress={handleGoogleLogin}
      >
        <Text>Continue with Google</Text>
        <ChevronRight color={colors.mutedForeground} size={scale(17)} />
      </Card>
    </Container>
  );
};

export default LoginScreen;
