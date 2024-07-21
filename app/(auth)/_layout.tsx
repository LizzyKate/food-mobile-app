import { Stack } from "expo-router";
import "react-native-reanimated";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="signin-options/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="signin/index" options={{ headerShown: false }} />
      <Stack.Screen name="detail/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="verification/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="location/index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="signup/index" options={{ headerShown: false }} />
    </Stack>
  );
}
