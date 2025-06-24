import { ShoppingCart } from "lucide-react-native";
import { useRouter } from "expo-router";

import { Badge, BadgeText } from "@/components/ui/badge";
// import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "../ui/pressable";

const Cart = () => {
  const router = useRouter();
  const totalItems = 2;

  return (
    <Pressable
      className="items-center"
      onPress={() => router.navigate("/cart")}
    >
      <VStack>
        <Badge
          className={`z-10 self-end ${
            totalItems > 9 ? "h-[28px] w-[28px]" : "h-[22px] w-[22px]"
          } -mb-3.5 -mr-3.5 rounded-full bg-red-600`}
          variant="solid"
        >
          <BadgeText className="font-bold text-white">{totalItems}</BadgeText>
        </Badge>
        <Icon as={ShoppingCart} size="xl" />
      </VStack>
    </Pressable>
  );
};

export default Cart;
