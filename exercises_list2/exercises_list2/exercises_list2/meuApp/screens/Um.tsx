import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Um: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.bottom} />
    </View>
  );
};

export default Um;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 0.5,
    backgroundColor: "#e5cffa",
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "#7B3FFB",
  },
});
