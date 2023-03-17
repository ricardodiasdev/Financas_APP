import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "./styles";
import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const SignUp = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const inputRef = useRef();
  const { user } = useContext(AuthContext);

  const handleCadastrar = () => {
    alert(user.uid+' - '+user.nome);
  };

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder="Nome"
            type="nome"
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => setNome(text)}
            ref={inputRef}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            type="email"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
            ref={inputRef}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Password"
            type="password"
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>
        <SubmitButton onPress={handleCadastrar}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
