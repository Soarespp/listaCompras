import { Button } from "@react-native-material/core";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useListaComprasContext } from "../../Components/Context";
import { typesPages } from "../../utils/constantes";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ContainerPagamento = () => {
  const [valueLista, setValueLista] = useState(0);
  const { setListaMercadoFinalizada, setTabPage, listaCompras } =
    useListaComprasContext();

  const dadoInterno = listaCompras?.find((item) => !item.finalizada);

  return (
    <View>
      <View
        style={{
          backgroundColor: "#e2e2e2",
          margin: 10,
          height: "100%",
          maxHeight: 600,
        }}
      >
        <View style={{ backgroundColor: "#fff", margin: 6 }}>
          <Text
            style={{ fontSize: 16 }}
          >{`Quantidade de itens: ${dadoInterno?.itens.length}`}</Text>
          <Text style={{ fontSize: 16 }}>{`Quantidade de encontrados: ${
            dadoInterno?.itens.filter((itens) => itens.comprado).length
          }`}</Text>
          <Text style={{ fontSize: 16 }}>{`Quantidade de faltando: ${
            dadoInterno?.itens.filter((itens) => itens.falta).length
          }`}</Text>
          <TextInput
            style={{ margin: 6, borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={(value) => setValueLista(value)}
          />
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "red",
            }}
          >
            <Button
              title="Pagar"
              color="#009093"
              trailing={(props) => <Icon name="send" {...props} />}
              onPress={() => {
                setListaMercadoFinalizada(valueLista);
                setTabPage(typesPages.pageHome);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContainerPagamento;
