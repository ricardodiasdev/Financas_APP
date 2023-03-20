import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import Picker from "../../components/Picker/index.android";

const New = () => {
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
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
          <Picker onChange={setTipo} tipo={tipo}/>
          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
};

export default New;
