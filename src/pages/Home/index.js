import React, { useContext, useState, useEffect } from "react";
import { Background, Container, Nome, Saldo, Title, List } from "./styles";
import firebase from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/auth";
import { format } from "date-fns";
import HistoricoList from "../../components/HistoricoList";

const Home = () => {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState();
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

      await firebase
        .database()
        .ref("historico")
        .child(uid)
        .orderByChild("date")
        .equalTo(format(new Date(), "dd/MM/yy"))
        .limitToLast(10)
        .on("value", (snapshot) => {
          setHistorico([]);
          snapshot.forEach((chidlItem) => {
            let list = {
              key: chidlItem.key,
              tipo: chidlItem.val().tipo,
              valor: chidlItem.val().valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
            }
            setHistorico(oldArray => [...oldArray, list].reverse())
          })
        });
    }
    loadList();
  }, []);

  return (
    <Background>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>
          R$ {user && parseFloat(saldo).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
        </Saldo>
      </Container>
      <Title>Últimas movimentações</Title>
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <HistoricoList data={item} />}
      />
    </Background>
  );
};

export default Home;
