import React from "react";
import { View, Button, Linking, Alert, StyleSheet } from "react-native";

export default function Ex1() {
  const abrirYoutube = () => {
    const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Erro", "Não foi possível abrir o YouTube.");
        }
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir YouTube" onPress={abrirYoutube} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 20,
  },
});
