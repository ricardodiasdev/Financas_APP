import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "./styles";
import React, { useState, useRef } from "react";

import logo from "../../assets/Logo.png";

const SignUp = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const inputRef = useRef();
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
        <SubmitButton>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
