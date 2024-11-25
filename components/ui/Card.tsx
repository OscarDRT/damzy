import { Theme } from "@/theme";
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Pressable, PressableProps } from "react-native";
import { BoxProps } from "./Box";

const CardVariant = createVariant<Theme, "cardVariants">({
  themeKey: "cardVariants",
});

type CardProps = PressableProps & VariantProps<Theme, "cardVariants">;

export const Card = createRestyleComponent<CardProps & BoxProps, Theme>(
  [CardVariant],
  Pressable
);
