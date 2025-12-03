import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Dois() {
  const [direction, setDirection] = useState("column");

  useEffect(() => {
    readOrientation();

    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => {
        const isPortrait =
          orientationInfo.orientation === 1 ||
          orientationInfo.orientation === 2;

        setDirection(isPortrait ? "column" : "row");
      }
    );

    return () =>
      ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  const readOrientation = async () => {
    const o = await ScreenOrientation.getOrientationAsync();
    setDirection(o === 1 || o === 2 ? "column" : "row");
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: direction }}>
      <View style={{ flex: 1, backgroundColor: "#FFA07A", justifyContent: "center", alignItems: "center" }}>
        <Text>Top</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "#F08080", justifyContent: "center", alignItems: "center" }}>
        <Text>Middle</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "#FF6347", justifyContent: "center", alignItems: "center" }}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
}
