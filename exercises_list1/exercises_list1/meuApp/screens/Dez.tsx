import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Switch,
} from "react-native";

const Dez: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);
  const [logado, setLogado] = useState<boolean>(false);
  const [resultado, setResultado] = useState<string>("");

  const handleCadastro = (): void => {
    if (senha !== confirmaSenha) {
      setResultado("As senhas não coincidem!");
    } else {
      setResultado(
        `Email: ${email}\nSenha: ${senha}\nLogado: ${logado ? "Sim" : "Não"}`
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={!mostrarSenha}
          maxLength={8}
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme a Senha"
          secureTextEntry={!mostrarSenha}
          maxLength={8}
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
        />

        <TouchableOpacity
          onPress={() => setMostrarSenha(!mostrarSenha)}
          style={styles.mostrarSenhaButton}
        >
          <Text style={styles.mostrarSenhaText}>
            {mostrarSenha ? "Ocultar Senha" : "Mostrar Senha"}
          </Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Logado:</Text>
          <Switch
            value={logado}
            onValueChange={setLogado}
            trackColor={{ false: "#e77878", true: "#94df83" }}
            thumbColor={logado ? "#47eb22" : "#ed1111"}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dez;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8B4F7",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 270,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
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
    marginBottom: 10,
  },
  mostrarSenhaButton: {
    marginBottom: 15,
  },
  mostrarSenhaText: {
    color: "#7B3FFB",
    fontWeight: "bold",
    textAlign: "right",
    width: "100%",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
    width: "100%",
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7B3FFB",
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
