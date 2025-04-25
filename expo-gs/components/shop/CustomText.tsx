import { Text, type TextProps } from "react-native";

export default function CustomText({ style, ...rest }: TextProps) {
  return <Text style={[style, { fontFamily: "SpaceMono" }]} {...rest} />;
}

// import CustomText from "./CustomText";
// <CustomText style={{ fontSize: 20, color: "red" }}> ABCD </CustomText>
