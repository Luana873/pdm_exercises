import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Constants from "expo-constants";
import logo from "../../assets/icon.png";

const Cinco: React.FC = () => {
  const handlePress = (): void => {
    Alert.alert("Boa noite!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={logo} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Cinco;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: 64,
    height: 64,
  },
});
