import React, { useState } from "react";
import { SafeAreaView, TextInput, Text, FlatList, View } from "react-native";

export default function Cinco() {
  const [name, setName] = useState("");
  const [list, setList] = useState<string[]>([]);

  const addName = () => {
    if (name.trim().length === 0) return;
    setList([...list, name]);
    setName("");
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        value={name}
        placeholder="Digite um nome"
        returnKeyType="done"
        onSubmitEditing={addName}
        onChangeText={setName}
      />

      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20 }}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
