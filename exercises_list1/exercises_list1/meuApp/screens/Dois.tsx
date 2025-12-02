import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Dois: React.FC = () => {
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

export default Dois;

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
    backgroundColor: "lime",
  },
  right: {
    flex: 0.5,
    backgroundColor: "aquamarine",
  },
});
