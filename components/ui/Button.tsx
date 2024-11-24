import { Theme, ThemeType } from "@/theme";
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Pressable, PressableProps } from "react-native";
import { ActivityIndicator } from "./ActivityIndicator";
import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

const ButtonVariant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

type ButtonProps = PressableProps &
  VariantProps<Theme, "buttonVariants"> & {
    label?: string;
    loading?: boolean;
  };

const ButtonBase = createRestyleComponent<ButtonProps & BoxProps, Theme>(
  [ButtonVariant],
  Pressable
);

const colorText: {
  [key in keyof ThemeType["buttonVariants"]]: keyof ThemeType["colors"];
} = {
  defaults: "primaryForeground",
  destructive: "destructiveForeground",
  outline: "foreground",
  secondary: "secondaryForeground",
  ghost: "foreground",
  link: "primary",
  disabled: "mutedForeground",
};

export const Button = ({
  label,
  variant,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  const textColor: keyof ThemeType["colors"] = disabled
    ? colorText["disabled"]
    : colorText[variant || "defaults"];

  const hasShadow = variant !== "ghost" && variant !== "link";
  const textDecorationLine = variant === "link" ? "underline" : "none";

  return (
    <ButtonBase
      {...props}
      disabled={disabled}
      variant={disabled ? "disabled" : variant}
      style={{
        boxShadow: hasShadow ? "4px 4px 6px 0 rgba(0, 0, 0, 0.2)" : undefined,
      }}
    >
      <Box alignItems="center" justifyContent="center">
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <>
            {label && (
              <Text
                variant="heading"
                color={textColor}
                textDecorationLine={textDecorationLine}
              >
                {label}
              </Text>
            )}
          </>
        )}
      </Box>
    </ButtonBase>
  );
};
