import { Link, Stack } from "expo-router";

import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Container justifyContent="center" alignItems="center">
        <Text>This screen doesn't exist.</Text>
        <Link href="/">
          <Text>Go to home screen!</Text>
        </Link>
      </Container>
    </>
  );
}
