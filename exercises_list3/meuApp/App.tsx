import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import YouTube from "./screens/Um";
import Discador from "./screens/Dois";
import Instagram from "./screens/Tres";
import ContactsC from "./screens/Quatro";
import ContactsFirstName from "./screens/Cinco";
import MediaGallery from "./screens/Seis";

import { RootStackParamList } from "./types";

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="YouTube">
        <Drawer.Screen name="YouTube" component={YouTube} options={{ title: "Ex. 1 - YouTube" }} />
        <Drawer.Screen name="Discador" component={Discador} options={{ title: "Ex. 2 - Discador" }} />
        <Drawer.Screen name="Instagram" component={Instagram} options={{ title: "Ex. 3 - Instagram" }} />
        <Drawer.Screen name="ContactsC" component={ContactsC} options={{ title: "Ex. 4 - Contatos (C...)" }} />
        <Drawer.Screen name="ContactsFirstName" component={ContactsFirstName} options={{ title: "Ex. 5 - Primeiro Nome" }} />
        <Drawer.Screen name="MediaGallery" component={MediaGallery} options={{ title: "Ex. 6/7/8 - Galeria/Câmera" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
