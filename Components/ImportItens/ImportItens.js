import { Button, Stack, TextInput } from "@react-native-material/core";
import { useState } from "react";
import { View } from "react-native";
import { typesPages, typesTab } from "../../utils/constantes";
import { useListaComprasContext } from "../Context";

const ImportItens = () => {
  const [value, setValue] = useState("");

  const { setTabPage, addItensListaCompras, setTabSelected } =
    useListaComprasContext();

  const geradorJSON = () => {
    var arrayItens = value.split("\n");
    var dadosUpdate = [];
    if (arrayItens) {
      arrayItens.map((itens) => {
        var ArrayItem = itens.split(":");
        if (ArrayItem.length == 2) {
          let name = ArrayItem[0].trim();
          let qt = ArrayItem[1].trim();

          if (name.length > 0 && qt.length && !!Number(qt)) {
            dadosUpdate = [...dadosUpdate, { name, qt }];
          }
        }
      });
      dadosUpdate.length > 0 && addItensListaCompras(dadosUpdate);
    }
  };

  return (
    <View>
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
            setTabSelected(typesTab.tabLista);
            setTabPage(typesPages.pageHome);
          }}
        />
      </Stack>
    </View>
  );
};

export default ImportItens;
