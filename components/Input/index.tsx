import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import { styles } from "./style";

interface InputProps extends TextInputProps {
  placeholder: string;
  label: string;
  error: string | null;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  error,
  label,
  onChangeText,
  onBlur,
  value,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
