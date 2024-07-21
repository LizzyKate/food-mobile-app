import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    GilroyRegular: require("@/assets/fonts/gilroy/Gilroy-Regular.ttf"),
    GilroySemibold: require("@/assets/fonts/gilroy/Gilroy-SemiBold.ttf"),
    GilroyLight: require("@/assets/fonts/gilroy/Gilroy-Light.ttf"),
    GilroyMedium: require("@/assets/fonts/gilroy/Gilroy-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, headerTitle: "" }}
        />
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false, headerTitle: "" }}
        />
      </Stack>
    </>
  );
}
