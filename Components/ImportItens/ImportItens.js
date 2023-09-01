import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import {
  defaultCategorias,
  typesPages,
  typesTab,
} from "../../utils/constantes";
import { useListaComprasContext } from "../Context";
import { getInfoCategoria } from "../../utils/imagensCategorias";

const ImportItens = () => {
  const [value, setValue] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  const { setTabPage, addItensListaCompras, setTabSelected } =
    useListaComprasContext();

  const geradorJSON = () => {
    var arrayItens = value.split("\n");
    var dadosUpdate = [];
    if (arrayItens) {
      arrayItens.map((itens) => {
        const arrayCategoria = itens.split(";");
        if (arrayCategoria.length === 2) {
          var ArrayItem = arrayCategoria[0].split(":");
          const catItem = arrayCategoria[1].trim();
          if (ArrayItem.length == 2) {
            let name = ArrayItem[0].trim();
            let qt = ArrayItem[1].trim();

            if (name.length > 0 && qt.length && !!Number(qt)) {
              dadosUpdate = [
                ...dadosUpdate,
                { name, qt, categoria: getInfoCategoria(catItem) },
              ];
            }
            return;
          }

          if (ArrayItem[0].length > 0) {
            dadosUpdate = [
              ...dadosUpdate,
              { name: ArrayItem[0], qt: 1, categoria: getInfoCategoria() },
            ];
          }
          return;
        }

        var ArrayItem = itens.split(":");
        if (ArrayItem.length == 2) {
          let name = ArrayItem[0].trim();
          let qt = ArrayItem[1].trim();

          if (name.length > 0 && qt.length && !!Number(qt)) {
            dadosUpdate = [
              ...dadosUpdate,
              { name, qt, categoria: getInfoCategoria() },
            ];
          }
          return;
        }
        if (ArrayItem[0].length > 0) {
          dadosUpdate = [
            ...dadosUpdate,
            { name: ArrayItem[0], qt: 1, categoria: getInfoCategoria() },
          ];
        }
      });
      dadosUpdate.length > 0 && addItensListaCompras(dadosUpdate);
    }
  };

  return (
    <View style={{ height: "100%" }}>
      <Pressable
        style={{ height: showDetail ? 150 : 25 }}
        onPress={() => setShowDetail((old) => !old)}
      >
        <Text style={{ fontSize: 18, paddingLeft: 8 }}>
          {"Informações: \n * Listar cada produto em uma linha\n " +
            '* Para informar quantidade colocar um ":" apos o nome do produto e informar a quantidade \n' +
            '* Para informar categoria colocar um ";" e informar:  \n' +
            '* Para informar quantidade colocar um ":" apos o nome do produto e informar a quantidade \n' +
            "    ** frios: fr " +
            "    ** Bebidas: b " +
            "    ** Carnes: c " +
            "    ** Frutas: f " +
            "    ** Verduras: v " +
            "    ** Limpeza: l " +
            "    ** Higiene: h " +
            "    ** Manutenção: m" +
            "    ** Genérico: gr  \n" +
            "  * Se não infomar nenhuma categoria vai ir como genérica"}
        </Text>
      </Pressable>
      <View style={styles.containenrButtons}>
        <Button
          title="Cancelar"
          onPress={() => {
            setValue();
            setTabSelected(typesTab.tabLista);
            setTabPage(typesPages.pageHome);
          }}
        />
        <Button
          title="Importar"
          style={styles.button}
          onPress={() => {
            geradorJSON();
            setTabSelected(typesTab.tabLista);
            setTabPage(typesPages.pageHome);
          }}
        />
      </View>
      <View style={{ flex: 1, margin: 8 }}>
        <TextInput
          placeholder="lista de compras separada por ;"
          multiline
          style={{
            padding: 12,
            borderWidth: 1,
            backgroundColor: "#fff",
            height: "80%",
          }}
          value={value}
          // inputContainerStyle={{ height: "100%" }}
          onChange={({ nativeEvent: { text } }) => setValue(text)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containenrButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 6,
    height: 50,
  },
  button: {
    borderRadius: 16,
  },
});

export default ImportItens;
