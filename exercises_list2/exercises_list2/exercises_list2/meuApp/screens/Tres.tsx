import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Tres: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
      <View style={styles.bottom} />
    </View>
  );
};

export default Tres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "crimson",
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
  },
  left: {
    flex: 0.5,
    backgroundColor: "teal",
  },
  right: {
    flex: 0.5,
    backgroundColor: "skyblue",
  },
});
