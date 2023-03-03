import { IconButton } from "@react-native-material/core";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useListaComprasContext } from "../../../Context";
import { typesPages } from "../../../../utils/constantes";

const MoreOptions = ({ onchangeOpen }) => {
  const { listaCompras, clearAllItensLista, atualizarDadosLista, setTabPage } =
    useListaComprasContext();

  const testeAtualiza = () => {
    const dados = [
      ...listaCompras,
      {
        dataLista: new Date("2020-02-24"),
        user: "Pedro Soares",
        finalizada: true,
        itens: [
          { id: 1, name: "Café 1", comprado: false, falta: false, qt: 1 },
          { id: 2, name: "Café 2", comprado: false, falta: false, qt: 11 },
          { id: 3, name: "Café 3", comprado: false, falta: true, qt: 11 },
        ],
      },
    ];
    atualizarDadosLista(dados);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#e2e2e2",
        width: 50,
        position: "absolute",
        marginTop: 34,
        marginRight: 20,
        zIndex: 11,
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <IconButton
          icon={(props) => <Icon name="cart-remove" {...props} />}
          onPress={() => {
            clearAllItensLista();
            onchangeOpen();
          }}
        />
        <IconButton
          icon={(props) => <Icon name="cart-check" {...props} />}
          color={
            listaCompras
              .find((lista) => !lista.finalizada)
              ?.itens.filter((item) => !item.comprado && !item.falta)?.length >
              0 || !listaCompras.find((lista) => !lista.finalizada)
              ? "red"
              : "#000"
          }
          disabled={
            listaCompras
              .find((lista) => !lista.finalizada)
              ?.itens.filter((item) => !item.comprado && !item.falta)?.length >
              0 || !listaCompras.find((lista) => !lista.finalizada)
          }
          onPress={() => {
            setTabPage(typesPages.pagePagamento);
            onchangeOpen();
          }}
        />
        {/* <IconButton
          icon={(props) => <Icon name="star-outline" {...props} />}
          onPress={() => {
            testeAtualiza();
            onchangeOpen();
          }}
        /> */}
      </View>
    </View>
  );
};

export default MoreOptions;
