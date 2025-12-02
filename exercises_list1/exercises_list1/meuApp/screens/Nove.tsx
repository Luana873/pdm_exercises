import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";


const Nove: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [role, setRole] = useState<string>("manager"); // valor padrão
  const [resultado, setResultado] = useState<string>("");

  const handleCadastro = (): void => {
    if (senha !== confirmaSenha) {
      setResultado("As senhas não coincidem!");
    } else {
      setResultado(`Email: ${email}\nSenha: ${senha}\nPerfil: ${role}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          maxLength={8}
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme a Senha"
          secureTextEntry={true}
          maxLength={8}
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
        />

        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Administrador" value="admin" />
          <Picker.Item label="Gestor" value="manager" />
          <Picker.Item label="Usuário" value="user" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Nove;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8B4F7",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 500,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 65,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#7B3FFB",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    width: "100%",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#7B3FFB",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    color: "#7B3FFB",
  },
});
