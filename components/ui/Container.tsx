import { useTheme } from "@/hooks/useTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, BoxProps } from "./Box";

interface ContainerProps extends BoxProps {
  children: React.ReactNode;
  safeArea?: boolean;
}

export const Container = ({
  children,
  safeArea = true,
  ...props
}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const { spacing } = useTheme();

  return (
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="l"
      style={{
        paddingTop: safeArea ? insets.top + spacing.l : undefined,
        paddingBottom: safeArea ? insets.bottom + spacing.l : undefined,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
