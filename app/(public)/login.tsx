import { Container } from "@/components/ui/Container";
import { Image } from "expo-image";

const blurhash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";

export default function Login() {
  return (
    <Container safeArea={false} paddingHorizontal="none">
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={10000}
      />
    </Container>
  );
}
