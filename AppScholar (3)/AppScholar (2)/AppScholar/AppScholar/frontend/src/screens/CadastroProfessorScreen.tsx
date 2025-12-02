import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { cadastrarProfessorApi } from '../api/services';

export default function CadastroProfessorScreen({ navigation }: any){
  const [name,setName] = useState('');
  const [titulacao,setTitulacao] = useState('');
  const [tempo,setTempo] = useState('');

  const submit = async () => {
    try {
      await cadastrarProfessorApi({ name, titulacao, tempo_docencia: Number(tempo) });
      Alert.alert('Sucesso','Professor cadastrado');
      navigation.goBack();
    } catch (err:any) {
      Alert.alert('Erro', err.response?.data?.message || 'Falha');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Titulação" style={styles.input} value={titulacao} onChangeText={setTitulacao} />
      <TextInput placeholder="Tempo (anos)" style={styles.input} keyboardType="numeric" value={tempo} onChangeText={setTempo} />
      <Button title="Cadastrar" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center',padding:20}, input:{width:'80%',borderWidth:1,borderColor:'#ccc',padding:10,marginVertical:5,borderRadius:5} });
