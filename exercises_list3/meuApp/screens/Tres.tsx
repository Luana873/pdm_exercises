import React from "react";
import { View, Button, Linking, Alert, StyleSheet } from "react-native";

export default function Ex3() {
  const abrirInstagram = () => {
    const url = "https://www.instagram.com/fatec_jacarei/";

    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Erro", "Não foi possível abrir o Instagram.");
        }
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir Instagram" onPress={abrirInstagram} />
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
