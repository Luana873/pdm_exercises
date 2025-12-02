import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Seis: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const handleSalvar = (): void => {
    setResultado(`Nome: ${nome} | Idade: ${idade}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
};

export default Seis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "crimson",
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});
