import { Image, View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import Button from "@/components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootParamList } from "@/constants/Navigation";

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const handleNavigate = () => {
    navigation.navigate("(auth)");
  };

  return (
    <ImageBackground
      source={require("@/assets/images/welcome.png")}
      style={styles.appContainer}
    >
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/carrot.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.text}>
          Get your groceries in as fast as one hour
        </Text>
        <Button
          title="Get started"
          onPress={() => handleNavigate()}
          backgroundColor="#53B175"
          justify="center"
          color="#fff"
        />
      </View>
    </ImageBackground>
  );
}
