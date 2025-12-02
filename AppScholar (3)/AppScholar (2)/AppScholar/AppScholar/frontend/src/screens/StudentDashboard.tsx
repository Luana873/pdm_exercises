import React from 'react';
import { View, Button } from 'react-native';

export default function StudentDashboard({ navigation, route }: any){
  const studentId = route?.params?.studentId ?? 1;
  return (
    <View style={{flex:1,padding:16}}>
      <Button title="Meu Boletim" onPress={() => navigation.navigate('Boletim', { studentId })} />
    </View>
  );
}

