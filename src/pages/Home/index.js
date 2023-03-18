import { Text, View } from "react-native";
import React, {useContext} from "react";

import {AuthContext} from '../../contexts/auth'

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.nome}</Text>
      <Text>{user && user.email}</Text>
    </View>
  );
};

export default Home;
