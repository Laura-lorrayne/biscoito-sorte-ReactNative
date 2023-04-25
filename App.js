import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("./src/img/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("");
  let frases = [
    "Às vezes, a vida vai te acertar um tijolo na cabeça. Não perca a fé.",
    "Quando você acredita em algo, acredite até o fim. Não dê margem para nenhum tipo de dúvida.",
    "A vida não é sobre ter, é sobre dar e ser.",
    "O entusiasmo é a maior força da alma. Conserva-o e nunca te faltará poder para conseguires o que desejas.",
    "Nós nos tornamos aquilo que pensamos.",
    "Vá até onde a sua vista alcançar e, ao chegar lá, você conseguirá enxergar mais longe.",
    "Eu acho que as metas nunca devem ser fáceis, elas devem forçá-lo a trabalhar, mesmo que sejam desconfortáveis ​​no momento.",
  ];
  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase('" ' + frases[numeroAleatorio] + ' "');
    setImg(require("./src/img/biscoitoAberto.png"));
  }
  function reiniciarBiscoito() {
    setTextoFrase("");
    setImg(require("./src/img/biscoito.png"));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biscoito da Sorte</Text>

      <Image style={styles.imagem} source={img} />
      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 230,
    height: 230,
  },
  title: {
    fontSize: 30,
    color: "#dd7b22",
    margin: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
