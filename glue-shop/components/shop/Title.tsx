import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";

type TitleProps = {
  title?: string;
  actionText?: string;
};

const Title = ({ title, actionText }: TitleProps) => {
  return (
    <HStack className="items-center justify-between">
      <Text size="lg" className="font-medium text-black">
        {title}
      </Text>
      <Pressable>
        <Text>{actionText}</Text>
      </Pressable>
    </HStack>
  );
};

export default Title;
