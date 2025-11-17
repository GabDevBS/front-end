import { Stack } from "expo-router";
import { setStatusBarHidden } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen name="home" options={{headerShown: false}}/>
    <Stack.Screen name="/" options={{headerShown: false}}/>
    </Stack>
  )
}
