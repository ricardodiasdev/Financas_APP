import { Text, View, Button } from "react-native";
import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

const Home = () => {
  const { user, signOut } = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.nome}</Text>
      <Text>{user && user.email}</Text>
      <Button title="Sair da conta" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
