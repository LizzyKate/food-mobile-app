import NumberInput from "@/components/NumberInput";
import { StyleSheet, View, Text } from "react-native";

export default function DetailScreen() {
  return (
    <View style={styles.appContainer}>
      <NumberInput />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
