import React, { useContext, useState } from "react";
import { Background, Container, Nome, Saldo, Title, List } from "./styles";

import { AuthContext } from "../../contexts/auth";

import HistoricoList from "../../components/HistoricoList";

const Home = () => {
  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 1200},
    {key: '2', tipo: 'despesa', valor: 200},
    {key: '3', tipo: 'receita', valor: 2200},
    {key: '4', tipo: 'despesa', valor: 1000},
    {key: '5', tipo: 'receita', valor: 1200},
    {key: '6', tipo: 'despesa', valor: 200},
    {key: '7', tipo: 'receita', valor: 2200},
    {key: '8', tipo: 'despesa', valor: 1000},
  ])
  const { user } = useContext(AuthContext);
  return (
    <Background>
      <Container>
        <Nome>Ricardo</Nome>
        <Saldo>R$ 12000,00</Saldo>
      </Container>
      <Title>Últimas movimentações</Title>
      <List
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={item => item.key}
      renderItem={({item}) => (<HistoricoList data={item} />)}
      />
    </Background>
  );
};

export default Home;
