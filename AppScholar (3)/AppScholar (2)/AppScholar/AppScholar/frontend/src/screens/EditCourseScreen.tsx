import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { editarCurso } from "../api/courseAxios";

export default function EditCourseScreen({ route, navigation }: any) {
  const course = route.params.course;

  const [name, setName] = useState(course.name);
  const [area, setArea] = useState(course.area);
  const [duration, setDuration] = useState(String(course.duration));
  const [coordinator, setCoordinator] = useState(course.coordinator);

  const handleEdit = async () => {
    await editarCurso(course.id, { name, area, duration: Number(duration), coordinator });
    Alert.alert("Sucesso", "Curso atualizado!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={area} onChangeText={setArea} />
      <TextInput style={styles.input} value={duration} onChangeText={setDuration} keyboardType="numeric" />
      <TextInput style={styles.input} value={coordinator} onChangeText={setCoordinator} />

      <Button title="Salvar alterações" onPress={handleEdit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
});
