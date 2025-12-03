import React from "react";
import { View, Button, Linking, Alert, StyleSheet } from "react-native";

export default function Ex2() {
  const ligar = () => {
    const phone = "tel:12988887777";

    Linking.canOpenURL(phone)
      .then(supported => {
        if (supported) {
          Linking.openURL(phone);
        } else {
          Alert.alert("Erro", "Discador não disponível.");
        }
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Ligar para número" onPress={ligar} />
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
