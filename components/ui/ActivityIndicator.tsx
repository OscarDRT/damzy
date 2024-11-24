import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/theme";
import { ActivityIndicator as RNActivityIndicator } from "react-native";

type ActivityIndicatorProps = {
  color?: keyof Theme["colors"];
};

export const ActivityIndicator = ({
  color = "primary",
}: ActivityIndicatorProps) => {
  const { colors } = useTheme();
  return <RNActivityIndicator color={colors[color]} />;
};
