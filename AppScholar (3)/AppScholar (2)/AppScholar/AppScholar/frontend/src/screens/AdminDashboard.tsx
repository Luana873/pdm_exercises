import React from 'react';
import { View, Button } from 'react-native';

export default function AdminDashboard({ navigation }: any){
  return (
    <View style={{flex:1,padding:16}}>
      <Button title="Cadastrar Professor" onPress={() => navigation.navigate('CadastroProfessor')} />
      <Button title="Cadastrar Aluno" onPress={() => navigation.navigate('CadastroAluno')} />
      <Button title="Cadastrar Disciplina" onPress={() => navigation.navigate('CadastroDisciplina')} />
      <Button title="Cadastrar Nota" onPress={() => navigation.navigate('CadastroNota')} />
      <Button title="Consultar Boletim" onPress={() => navigation.navigate('Boletim')} />
    </View>
  );
}
