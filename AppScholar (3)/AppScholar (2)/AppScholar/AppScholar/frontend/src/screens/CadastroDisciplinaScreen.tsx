import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { listarProfessoresApi, cadastrarDisciplinaApi } from '../api/services';
import { Picker } from '@react-native-picker/picker';

export default function CadastroDisciplinaScreen({ navigation }: any){
  const [name,setName]=useState('');
  const [carga,setCarga]=useState('');
  const [professorId,setProfessorId]=useState<number | null>(null);
  const [professores,setProfessores]=useState<any[]>([]);

  useEffect(()=>{ (async ()=>{ try{ const r = await listarProfessoresApi(); setProfessores(r.data);}catch(e){}})() },[]);

  const submit = async () =>{
    try{
      await cadastrarDisciplinaApi({ name, carga_horaria: Number(carga), professor_id: professorId });
      Alert.alert('Sucesso','Disciplina cadastrada');
      navigation.goBack();
    }catch(err:any){ Alert.alert('Erro', err.response?.data?.message || 'Falha'); }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome da disciplina" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Carga horária" style={styles.input} keyboardType="numeric" value={carga} onChangeText={setCarga} />
      <Picker selectedValue={professorId} onValueChange={(v)=>setProfessorId(v)}>
        <Picker.Item label="Selecione professor" value={null} />
        {professores.map(p => <Picker.Item key={p.id} label={p.name} value={p.id} />)}
      </Picker>
      <Button title="Cadastrar" onPress={submit} />
    </View>
  );
}
const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center',padding:20}, input:{width:'80%',borderWidth:1,borderColor:'#ccc',padding:10,marginVertical:5,borderRadius:5} });
