import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login2 from "./screens/login2";
import register2 from "./screens/register2";
import chatpage from "./screens/chatpage";
import friend from "./screens/friend"
import user from "./screens/user"
import inf from "./screens/inf"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login2"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={login2} name="login2" />
        <Stack.Screen component={register2} name="register2" />
        <Stack.Screen component={chatpage} name="chatpage" />
        <Stack.Screen component={friend} name="friend" />
        <Stack.Screen component={user} name="user" />
        <Stack.Screen component={inf} name="inf" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
