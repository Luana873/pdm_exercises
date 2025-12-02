import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import logo from "../../assets/icon.png";

const Quatro: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default Quatro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
    alignSelf: "center",
  },
});
