import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Quatro() {
  const [isPortrait, setPortrait] = useState(true);

  const read = async () => {
    const o = await ScreenOrientation.getOrientationAsync();
    setPortrait(o === ScreenOrientation.Orientation.PORTRAIT_UP);
  };

  useEffect(() => {
    read();
    const sub = ScreenOrientation.addOrientationChangeListener(({ orientationInfo }) => {
      setPortrait(
        orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP
      );
    });
    return () => ScreenOrientation.removeOrientationChangeListener(sub);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {isPortrait ? (
        <>
          <View style={{ flex: 1, backgroundColor: "#00BFFF", margin: 5 }} />
          <View style={{ flex: 1, backgroundColor: "#1E90FF", margin: 5 }} />
          <View style={{ flex: 1, backgroundColor: "#4169E1", margin: 5 }} />
        </>
      ) : (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "#00BFFF", margin: 5 }} />
          <View style={{ flex: 1, backgroundColor: "#1E90FF", margin: 5 }} />
          <View style={{ flex: 1, backgroundColor: "#4169E1", margin: 5 }} />
        </View>
      )}
    </SafeAreaView>
  );
}
