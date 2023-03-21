import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import firebase from "../../services/firebaseConnection";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import { format } from "date-fns";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import Picker from "../../components/Picker/index.android";

const New = () => {
  const navigation = useNavigation();
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const { user: usuario } = useContext(AuthContext); // usou-se user em outros locais

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === null) {
      Alert.alert("Aviso", "Preencha todos os campos");
      return;
    }

    Alert.alert(
      "Confirmando dados",
      `Tipo ${tipo} - Valor: ${parseFloat(valor).toFixed(2)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => handleAdd(),
        },
      ]
    );
  }

  async function handleAdd() {
    let uid = usuario.uid;
    let key = await firebase.database().ref("historico").child(uid).push().key;
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(key)
      .set({
        tipo: tipo,
        valor: parseFloat(valor),
        date: format(new Date(), "dd/MM/yyyy"),
      });
    //Atualizar o saldo
    let user = firebase.database().ref("users").child(uid);
    await user.once("value").then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);
      tipo === "despesa"
        ? (saldo -= parseFloat(valor))
        : (saldo += parseFloat(valor));
      user.child("saldo").set(saldo);
    });
    setValor("");
    Keyboard.dismiss();
    navigation.navigate("Home");
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            onChangeText={(value) => setValor(value)}
          />
          <Picker onChange={setTipo} tipo={tipo} />
          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
};

export default New;
