import { StyleSheet, ViewStyle } from "react-native";

export const createStyles = (
  justify: ViewStyle["justifyContent"],
  backgroundColor?: string,
  marginTop?: number,
  color?: string
) =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: justify,
      padding: 16,
      borderRadius: 8,
      backgroundColor,
      marginTop,
    },
    text: {
      color,
      marginLeft: 8,
      textAlign: "center",
    },
  });
