import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Um from "./screens/Um";
import Dois from "./screens/Dois";
import Tres from "./screens/Tres";
import Quatro from "./screens/Quatro";
import Cinco from "./screens/Cinco";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Um" component={Um} />
        <Stack.Screen name="Dois" component={Dois} />
        <Stack.Screen name="Tres" component={Tres} />
        <Stack.Screen name="Quatro" component={Quatro} />
        <Stack.Screen name="Cinco" component={Cinco} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
