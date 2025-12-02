import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const Sete: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const handleLogin = (): void => {
    setResultado(`Email: ${email}\nSenha: ${senha}`);
  };

  const handleCadastro = (): void => {
    setResultado(`Cadastro: ${email}\nSenha: ${senha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
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

        {/* Bloco com os dois botões lado a lado */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.textButton}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.result}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Sete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5cffa", // roxo claro de fundo
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  box: {
    width: "90%",
    backgroundColor: "#fff", // bloco branco
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000", // sombra leve para destaque
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  button: {
    flex: 1, // cada botão ocupa metade da linha
    backgroundColor: "#7B3FFB", // botão roxo
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5, // espaço entre os botões
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  result: {
    fontSize: 16,
    textAlign: "center",
  },
});
