import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Button size="lg" variant="solid" action="negative">
        <ButtonText>Hello World!</ButtonText>
        <ButtonSpinner />
      </Button>
    </SafeAreaView>
  );
}
