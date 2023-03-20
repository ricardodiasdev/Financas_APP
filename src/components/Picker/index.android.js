import React from "react";
import { PickerView } from "./styles";
import { Picker as PickerSelect } from "@react-native-picker/picker";
const Picker = ({ onChange, tipo }) => {
  return (
    <PickerView>
      <PickerSelect
        style={{
          width: "100%",
        }}
        selectedValue={tipo}
        onValueChange={(valor) => {
          onChange(valor);
        }}
      >
        <PickerSelect.Item label="Receita" value="receita" />
        <PickerSelect.Item label="Despesa" value="despesa" />
      </PickerSelect>
    </PickerView>
  );
};

export default Picker;
