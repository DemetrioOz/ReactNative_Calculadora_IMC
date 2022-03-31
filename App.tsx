import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Title } from "./src/components/Title";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  function handleSubmit() {
    const alt = Number(altura) / 100;
    const imcResult = Number(peso) / (alt * alt);
    setImc(String(imcResult.toFixed(1)));
    if (imcResult <= 18.6) {
      setImc(`Voce esta abaixo do peso! ${String(imcResult.toFixed(1))}`);
    } else if (imcResult > 18.6 && imcResult <= 24.9) {
      setImc(`Peso ideal! ${String(imcResult.toFixed(1))}`);
    } else if (imcResult > 24.9 && imcResult <= 34.9) {
      setImc(`Voce esta acima do peso! ${String(imcResult.toFixed(1))}`);
    } else if (imcResult > 34.9) {
      setImc(`Obesidade! ${String(imcResult.toFixed(1))}`);
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Title title="Calcule seu imc" />
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Peso (KG)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Altura (cm)"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <Title title={imc} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: "#222",
    fontSize: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#41Aef4",
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
});
