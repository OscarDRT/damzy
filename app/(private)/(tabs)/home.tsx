import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { useAuth } from "@clerk/clerk-expo";

const HomeScreen = () => {
  const { signOut } = useAuth();

  return (
    <Box
      backgroundColor="background"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Text>Private</Text>
      <Button onPress={() => signOut()} label="Sign Out" />
    </Box>
  );
};

export default HomeScreen;
