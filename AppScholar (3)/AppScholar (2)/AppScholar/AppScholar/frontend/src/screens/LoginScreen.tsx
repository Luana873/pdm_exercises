import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi } from '../api/services';

export default function LoginScreen({ navigation }: any){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const r = await loginApi(email,password);
      const { token, user } = r.data;
      await AsyncStorage.setItem('@appscholar:token', token);
      if (user.role === 'admin' || user.role === 'professor') navigation.replace('AdminDashboard');
      else navigation.replace('StudentDashboard', { studentId: user.id });
    } catch (err:any) {
      Alert.alert('Erro', err.response?.data?.message || 'Falha ao logar');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Cadastrar Aluno" onPress={() => navigation.navigate('CadastroAluno')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},
  input:{width:'80%',borderWidth:1,borderColor:'#ccc',padding:10,marginVertical:5,borderRadius:5}
});
