import { Stack } from "expo-router";
import "react-native-reanimated";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="signup-options/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="signup/index" options={{ headerShown: false }} />
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
