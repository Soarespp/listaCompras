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
          {
            id: 1,
            name: "Frios",
            comprado: false,
            falta: false,
            qt: 1,
            categoria: "f",
          },
          {
            id: 2,
            name: "Verduras",
            comprado: false,
            falta: false,
            qt: 11,
            categoria: "v",
          },
          {
            id: 3,
            name: "Limpeza",
            comprado: false,
            falta: true,
            qt: 11,
            categoria: "l",
          },
          {
            id: 1,
            name: "Utensílios",
            comprado: true,
            falta: false,
            qt: 1,
            categoria: "u",
          },
          {
            id: 2,
            name: "Mantimentos",
            comprado: false,
            falta: false,
            qt: 11,
            categoria: "m",
          },
          {
            id: 3,
            name: "Bebidas",
            comprado: false,
            falta: true,
            qt: 11,
            categoria: "b",
          },
          {
            id: 3,
            name: "Outros",
            comprado: false,
            falta: false,
            qt: 11,
            categoria: "o",
          },
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
        <IconButton
          icon={(props) => <Icon name="star-outline" {...props} />}
          onPress={() => {
            testeAtualiza();
            onchangeOpen();
          }}
        />
      </View>
    </View>
  );
};

export default MoreOptions;
