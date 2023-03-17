import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";
import React, { useState, useRef } from "react";

import logo from "../../assets/Logo.png";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const inputRef = useRef();
  return (
    <Background>
      <Container>
        <Logo source={logo} />
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
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link>
        <LinkText>Criar uma conta</LinkText>
      </Link>
      </Container>
    </Background>
  );
};

export default SignIn;
