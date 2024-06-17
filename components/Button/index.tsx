import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { createStyles } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isIcon?: boolean;
  icon?: React.ReactNode;
  backgroundColor: string;
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
}) => {
  const styles = createStyles(backgroundColor, justify);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      disabled={disabled}
    >
      {icon}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
