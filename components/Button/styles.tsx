import { StyleSheet, ViewStyle } from "react-native";

export const createStyles = (
  backgroundColor: string,
  justify: ViewStyle["justifyContent"]
) =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: justify,
      padding: 16,
      borderRadius: 8,
      backgroundColor,
    },
    text: {
      color: "#fff",
      marginLeft: 8,
      textAlign: "center",
    },
  });
