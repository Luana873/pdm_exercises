import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { listarCursos, excluirCurso } from "../api/courseAxios";

const CourseListScreen = ({ navigation }: any) => {
  const [cursos, setCursos] = useState([]);

  const load = async () => {
    const res = await listarCursos();
    setCursos(res.data);
  };

  useEffect(() => {
    const focus = navigation.addListener("focus", load);
    return focus;
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Cadastrar Curso" onPress={() => navigation.navigate("AddCourse")} />

      <FlatList
        data={cursos}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>Área: {item.area}</Text>
            <Text>Duração: {item.duration}h</Text>
            <Text>Coordenador: {item.coordinator}</Text>

            <Button title="Editar" onPress={() => navigation.navigate("EditCourse", { course: item })} />
            <Button title="Excluir" onPress={() => excluirCurso(item.id).then(load)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#ccc" },
  title: { fontSize: 18, fontWeight: "bold" },
});

export default CourseListScreen;
