import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Quatro: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default Quatro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  box1: {
    flex: 0.33,
    backgroundColor: "gold",
  },
  box2: {
    flex: 0.33,
    backgroundColor: "orange",
  },
  box3: {
    flex: 0.33,
    backgroundColor: "red",
  },
});
