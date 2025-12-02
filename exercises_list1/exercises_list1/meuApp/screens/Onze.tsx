import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const Abertura: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/adaptive-icon.png")} // sua imagem Fatec
        style={styles.logo}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Abertura;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8B4F7",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#7B3FFB",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
