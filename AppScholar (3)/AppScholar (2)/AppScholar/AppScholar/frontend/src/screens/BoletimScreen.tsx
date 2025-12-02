import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { boletimAlunoApi } from '../api/services';

export default function BoletimScreen({ route }: any){
  const studentId = route?.params?.studentId ?? 1;
  const [data,setData] = useState<any>(null);

  useEffect(()=>{ (async ()=>{ try{ const r = await boletimAlunoApi(studentId); setData(r.data); }catch(e){ console.error(e); } })() },[]);

  if(!data) return (<View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Carregando...</Text></View>);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boletim — {data.aluno}</Text>
      <FlatList data={data.disciplinas} keyExtractor={(i:any)=>String(i.disciplina_id)} renderItem={({item})=>(
        <View style={styles.item}>
          <Text style={{fontWeight:'bold'}}>{item.disciplina}</Text>
          <Text>Nota: {item.nota}</Text>
        </View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1,padding:20}, title:{fontSize:20,fontWeight:'bold',marginBottom:12,textAlign:'center'}, item:{padding:10,borderBottomWidth:1,borderColor:'#ddd'} });
