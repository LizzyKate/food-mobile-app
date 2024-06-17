import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    marginTop: 150,
  },
  image: {
    width: 48.47,
    height: 56.36,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 48,
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "GilroySemibold",
    fontWeight: "600",
    width: 253,
    lineHeight: 50,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "GilroyLight",
    lineHeight: 24,
    marginBottom: 40,
  },
});
