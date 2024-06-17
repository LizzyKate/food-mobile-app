import Button from "@/components/Button";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootParamList } from "@/constants/Navigation";

export default function SigninScreen() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const handleNavigate = () => {
    navigation.navigate("detail/index");
  };
  return (
    <View>
      <Image
        style={styles.image}
        source={require("@/assets/images/Mask.png")}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Get your groceries with nectar</Text>
          <Button
            title="Sign in manually"
            backgroundColor="#53B175"
            onPress={() => handleNavigate()}
            justify="center"
          />
          <Button
            title="Continue with Google"
            backgroundColor="#5383EC"
            onPress={() => console.log("signup")}
            justify="flex-start"
            isIcon={true}
            icon={<AntDesign name="google" size={24} color="white" />}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <Button
            title="Continue with Facebook"
            backgroundColor="#3B5998"
            onPress={() => console.log("signup")}
            justify="flex-start"
            isIcon={true}
            icon={<AntDesign name="facebook-square" size={24} color="white" />}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 500,
  },
  container: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "GilroySemiBold",
    color: "#030303",
    lineHeight: 35,
    fontWeight: "600",
    marginBottom: 40,
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    marginLeft: 85,
  },
});
