import Button from "@/components/Button/index";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootParamList } from "@/constants/Navigation";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { makeRedirectUri } from "expo-auth-session";

const { width, height } = Dimensions.get("window");

WebBrowser.maybeCompleteAuthSession();

export default function SigninOptionsScreen() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "67192975109-hq56fffb0gmdeuim6p392m2ah7arthc2.apps.googleusercontent.com",
    androidClientId:
      "67192975109-tnke6fekmqimeniqs6u37qc836c5js79.apps.googleusercontent.com67192975109-tnke6fekmqimeniqs6u37qc836c5js79.apps.googleusercontent.com",
    webClientId:
      "67192975109-csfngdnrlt2vd02mlb8psepuslukeha0.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      native: "com.anonymous.foodap",
      scheme: "com.anonymous.foodap",
      preferLocalhost: false,
      path: "foodap",
    }),
  });
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const handleNavigate = () => {
    navigation.navigate("signup/index");
  };
  console.log(process.env.EXPO_IOS_CLIENT_ID);
  return (
    <View>
      <Image
        style={styles.image}
        source={require("@/assets/images/Mask.png")}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Get your groceries with nectar</Text>
        <Button
          title="Sign in manually"
          backgroundColor="#53B175"
          onPress={() => handleNavigate()}
          justify="center"
          color="#fff"
        />
        <Button
          title="Continue with Google"
          backgroundColor="#5383EC"
          onPress={() => {
            promptAsync();
            console.log("google");
          }}
          justify="flex-start"
          isIcon={true}
          icon={<AntDesign name="google" size={24} color="white" />}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          color="#fff"
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
          color="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: height / 2,
    width: width,
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
