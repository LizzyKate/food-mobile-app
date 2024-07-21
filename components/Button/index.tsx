import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { createStyles } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isIcon?: boolean;
  icon?: React.ReactNode;
  backgroundColor?: string;
  marginTop?: number;
  justify:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: ViewStyle;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  icon,
  backgroundColor,
  justify,
  disabled,
  buttonStyle,
  textStyle,
  marginTop,
  color,
}) => {
  const styles = createStyles(justify, backgroundColor, marginTop, color);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      disabled={disabled}
    >
      {icon}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
