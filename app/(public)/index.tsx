import { Box } from "@/components/ui/Box";
import { Text } from "@/components/ui/Text";
import * as Sentry from "@sentry/react-native";
import { Button } from "react-native";

export default function PublicScreen() {
  return (
    <Box
      backgroundColor="background"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Text>Public</Text>

      <Button
        title="Try!"
        onPress={() => {
          Sentry.captureException(new Error("First error"));
        }}
      />
    </Box>
  );
}
