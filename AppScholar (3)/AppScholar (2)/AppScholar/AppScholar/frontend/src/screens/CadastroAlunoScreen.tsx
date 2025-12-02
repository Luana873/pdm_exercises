import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { cadastrarAluno } from "../api/studentApi";

const CadastroAlunoScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async () => {
    if (!name || !enrollment || !course) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await cadastrarAluno({
        name,
        enrollment,
        course,
      });

      Alert.alert("Sucesso", "Aluno cadastrado!");
      navigation.goBack();

    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível cadastrar o aluno.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={enrollment}
        onChangeText={setEnrollment}
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={course}
        onChangeText={setCourse}
      />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default CadastroAlunoScreen;
