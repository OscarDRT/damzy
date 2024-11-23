import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;

/**
 * Scales a size value proportionally based on screen width
 * @param size - The original size value to scale
 * @returns The scaled size value adjusted for the current screen width
 */
export const scale = (size: number) => (width / guidelineBaseWidth) * size;

/**
 * Scales a size value proportionally based on screen height
 * @param size - The original size value to scale
 * @returns The scaled size value adjusted for the current screen height
 */
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

/**
 * Scales a size value proportionally based on screen size
 * @param size - The original size value to scale
 * @param factor - The factor to adjust the scaling (default is 0.5)
 * @returns The scaled size value adjusted for the current screen size
 */
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
