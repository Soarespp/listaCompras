import { IconButton } from "@react-native-material/core";
import { Text, View } from "react-native";
import { useListaComprasContext } from "../../Components/Context";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ContainerHistorico = () => {
  const { listaCompras, excluirListaMercado, changeListaMercadoFinalizada } =
    useListaComprasContext();

  return (
    <View>
      <View
        style={{
          backgroundColor: "#e2e2e2",
          margin: 10,
        }}
      >
        {listaCompras
          ?.filter((lista) => lista.finalizada)
          .map((lista, key) => (
            <View
              style={{
                margin: 3,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              key={key}
            >
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 12,
                }}
              >{`Data: ${new Date(
                lista.dataLista
              ).toLocaleDateString()}`}</Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 12,
                  paddingLeft: 6,
                }}
              >{`Valor: ${lista?.value || 0}`}</Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 12,
                  paddingLeft: 6,
                }}
              >{`Itens: ${lista?.itens?.length}`}</Text>
              <View style={{ flexDirection: "row", paddingLeft: 6 }}>
                <IconButton
                  icon={(props) => <Icon name="reload-alert" {...props} />}
                  onPress={() => changeListaMercadoFinalizada(lista.dataLista)}
                />
                <IconButton
                  icon={(props) => <Icon name="trash-can-outline" {...props} />}
                  onPress={() => excluirListaMercado(lista.dataLista)}
                />
              </View>
            </View>
          ))}
      </View>
    </View>
  );
};

export default ContainerHistorico;
