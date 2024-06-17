import { StyleSheet, View, Text } from "react-native";

export default function LocationScreen() {
  return (
    <View style={styles.appContainer}>
      <Text>hi</Text>
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
