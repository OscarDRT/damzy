import { Box } from "@/components/ui/Box";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/hooks/useTheme";
import { scale } from "@/utils/responsive";
import { List, LucideIcon, Mic, WifiOff } from "lucide-react-native";

export default function WelcomeScreen() {
  const { fonts, colors } = useTheme();

  return (
    <Container justifyContent="space-between">
      <Box>
        <Text variant="largeTitle">
          Welcome to{"\n"}
          <Text variant="largeTitle" color="primary">
            damzy
          </Text>
        </Text>
      </Box>

      <Box gap="xl">
        {FEATURES.map((feature) => (
          <Box key={feature.title} flexDirection="row" gap="l">
            <feature.icon size={scale(38)} color={colors.primary} />
            <Box flex={1}>
              <Text variant="heading">{feature.title}</Text>
              <Text variant="footnote">{feature.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>

      <Box>
        <Text>Button here!</Text>
      </Box>
    </Container>
  );
}

const FEATURES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Stay Organized",
    description:
      "Create, prioritize, and manage tasks like a pro. Damzy makes staying productive a breeze.",
    icon: List,
  },
  {
    title: "Work Offline, Sync Anytime",
    description:
      "No internet? No problem. Manage your tasks offline, and damzy will sync everything when you're back online.",
    icon: WifiOff,
  },
  {
    title: "Add Tasks with Your Voice",
    description:
      "Say it, and Damzy makes it happen. Add tasks quickly and hands-free using voice commands.",
    icon: Mic,
  },
];
