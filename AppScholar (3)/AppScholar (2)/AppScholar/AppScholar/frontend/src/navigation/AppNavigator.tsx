import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminDashboard from '../screens/AdminDashboard';
import LoginScreen from '../screens/LoginScreen';
import StudentDashboard from '../screens/StudentDashboard';
import CadastroAlunoScreen from '../screens/CadastroAlunoScreen';
import CadastroProfessorScreen from '../screens/CadastroProfessorScreen';
import CadastroDisciplinaScreen from '../screens/CadastroDisciplinaScreen';
import CadastroNotaScreen from '../screens/CadastroNotaScreen';
import BoletimScreen from '../screens/BoletimScreen';
import CourseListScreen from "../screens/CourseListScreen";
import AddCourseScreen from "../screens/AddCourseScreen";
import EditCourseScreen from "../screens/EditCourseScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator(){
  return (
    <Stack.Navigator initialRouteName="AdminDashboard">
     <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      <Stack.Screen name="CadastroAluno" component={CadastroAlunoScreen} />
      <Stack.Screen name="CadastroProfessor" component={CadastroProfessorScreen} />
      <Stack.Screen name="CadastroDisciplina" component={CadastroDisciplinaScreen} />
      <Stack.Screen name="CadastroNota" component={CadastroNotaScreen} />
      <Stack.Screen name="Boletim" component={BoletimScreen} />
      <Stack.Screen name="Courses" component={CourseListScreen} />
     <Stack.Screen name="AddCourse" component={AddCourseScreen} />
     <Stack.Screen name="EditCourse" component={EditCourseScreen} />

    </Stack.Navigator>
  );
}
