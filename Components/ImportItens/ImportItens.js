import { Button, Stack, TextInput } from "@react-native-material/core";
import { useState } from "react";
import { Text, View } from "react-native";
import { useListaComprasContext } from "../Context";

const ImportItens = () => {
  const [value, setValue] = useState("");

  const { changeOpenImportOptions, addItensListaCompras, changeMenuOpen } =
    useListaComprasContext();

  const geradorJSON = () => {
    var arrayItens = value.split("\n");
    var dadosUpdate = [];
    if (arrayItens) {
      arrayItens.map((itens) => {
        var ArrayItem = itens.split(":");
        if (ArrayItem.length == 2) {
          var teste1 = { name: ArrayItem[0], qt: ArrayItem[1] };
          if (teste1.name.length > 0 && teste1.qt.length) {
            dadosUpdate = [...dadosUpdate, teste1];
          }
        }
      });
      addItensListaCompras(dadosUpdate);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        position: "absolute",
        zIndex: 10,
      }}
    >
      <Stack direction="column">
        <TextInput
          label="Impordar lista"
          multiline
          placeholder="lista de compras separada por ;"
          inputContainerStyle={{ height: 200 }}
          onChangeText={(textValue) => setValue(textValue)}
          value={value}
        />
        <Button
          title="Import"
          color="#009093"
          onPress={() => {
            geradorJSON();
            changeOpenImportOptions("lista");
            changeMenuOpen();
          }}
        />
      </Stack>
    </View>
  );
};

export default ImportItens;
