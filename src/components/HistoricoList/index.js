import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Container, Tipo, IconView, TipoText, ValorText } from "./styles";

const HistoricoList = ({ data }) => {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <MaterialCommunityIcons
            name={data.tipo === "despesa" ? "arrow-down" : "arrow-up"}
            color="#FFF"
            size={20}
          />
          <TipoText>{data.tipo === "despesa" ? "Despesa" : "Receita"}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>R$ {data.valor}</ValorText>
    </Container>
  );
};

export default HistoricoList;
