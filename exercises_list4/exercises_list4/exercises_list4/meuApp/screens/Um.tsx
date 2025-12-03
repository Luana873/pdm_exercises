import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Um() {
  const [mode, setMode] = useState("portrait");

  useEffect(() => {
    readOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => {
        if (
          orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
          orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
        ) {
          setMode("portrait");
        } else {
          setMode("landscape");
        }
      }
    );

    return () =>
      ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  const readOrientation = async () => {
    const o = await ScreenOrientation.getOrientationAsync();
    setMode(
      o === 1 || o === 2 ? "portrait" : "landscape"
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: mode === "portrait" ? "#FFA500" : "#1E90FF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Exercício 1 – modo: {mode}</Text>
    </SafeAreaView>
  );
}
