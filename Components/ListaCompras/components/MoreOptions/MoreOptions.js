import { View } from "react-native";

import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useListaComprasContext } from "../../../Context";
import { typesPages } from "../../../../utils/constantes";

const MoreOptions = ({ onchangeOpen }) => {
  const { listaCompras, clearAllItensLista, setTabPage } =
    useListaComprasContext();

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
      </View>
    </View>
  );
};

export default MoreOptions;
