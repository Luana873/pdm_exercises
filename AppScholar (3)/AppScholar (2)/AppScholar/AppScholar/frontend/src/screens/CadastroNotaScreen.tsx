import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { listarAlunosApi, listarDisciplinasApi, adicionarNotaApi } from '../api/services';
import { Picker } from '@react-native-picker/picker';

export default function CadastroNotaScreen({ navigation }: any){
  const [students,setStudents]=useState<any[]>([]);
  const [disciplinas,setDisciplinas]=useState<any[]>([]);
  const [studentId,setStudentId]=useState<number | null>(null);
  const [disciplinaId,setDisciplinaId]=useState<number | null>(null);
  const [nota,setNota]=useState('');

  useEffect(()=>{ (async ()=>{ try{ const s = await listarAlunosApi(); setStudents(s.data); const d = await listarDisciplinasApi(); setDisciplinas(d.data);}catch(e){}})() },[]);

  const submit = async () =>{
    try{
      await adicionarNotaApi({ student_id: studentId, disciplina_id: disciplinaId, nota: Number(nota) });
      Alert.alert('Sucesso','Nota cadastrada');
      navigation.goBack();
    }catch(err:any){ Alert.alert('Erro', err.response?.data?.message || 'Falha'); }
  };

  return (
    <View style={styles.container}>
      <Picker selectedValue={studentId} onValueChange={(v)=>setStudentId(v)}>
        <Picker.Item label="Selecione aluno" value={null} />
        {students.map(s => <Picker.Item key={s.id} label={`${s.name} (${s.enrollment})`} value={s.id} />)}
      </Picker>

      <Picker selectedValue={disciplinaId} onValueChange={(v)=>setDisciplinaId(v)}>
        <Picker.Item label="Selecione disciplina" value={null} />
        {disciplinas.map(d => <Picker.Item key={d.id} label={d.name} value={d.id} />)}
      </Picker>

      <TextInput placeholder="Nota" style={styles.input} keyboardType="numeric" value={nota} onChangeText={setNota} />
      <Button title="Cadastrar Nota" onPress={submit} />
    </View>
  );
}
const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center',padding:20}, input:{width:'80%',borderWidth:1,borderColor:'#ccc',padding:10,marginVertical:5,borderRadius:5} });
