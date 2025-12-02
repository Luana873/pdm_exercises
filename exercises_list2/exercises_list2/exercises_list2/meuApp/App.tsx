import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Um from "./screens/Um";
import Dois from "./screens/Dois";
import Tres from "./screens/Tres";
import Quatro from "./screens/Quatro";

import { RootStackParamList } from "./types";

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Um">
        <Drawer.Screen name="Um" component={Um} options={{ title: "Tela Um" }} />
        <Drawer.Screen name="Dois" component={Dois} options={{ title: "Tela Dois" }} />
        <Drawer.Screen name="Tres" component={Tres} options={{ title: "Tela Três" }} />
        <Drawer.Screen name="Quatro" component={Quatro} options={{ title: "Tela Quatro" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
