import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { criarCurso } from "../api/courseAxios";

export default function AddCourseScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [duration, setDuration] = useState("");
  const [coordinator, setCoordinator] = useState("");

  const handleSave = async () => {
    await criarCurso({ name, area, duration: Number(duration), coordinator });
    Alert.alert("Sucesso", "Curso cadastrado!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Área" value={area} onChangeText={setArea} />
      <TextInput style={styles.input} placeholder="Duração (h)" keyboardType="numeric" value={duration} onChangeText={setDuration} />
      <TextInput style={styles.input} placeholder="Coordenador" value={coordinator} onChangeText={setCoordinator} />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
});
