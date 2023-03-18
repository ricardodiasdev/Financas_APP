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
import React, { useState, useRef, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import logo from "../../assets/Logo.png";

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const inputRef = useRef();

  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    signIn(email, password);
  };

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
        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
};

export default SignIn;
