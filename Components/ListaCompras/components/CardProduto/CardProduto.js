import { Alert, Image, StyleSheet, Text, View } from "react-native";

import { Card, CardBody } from "./CardProduto.style";
import { getImageCategoria } from "../../../../utils/imagensCategorias";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useListaComprasContext } from "../../../Context";
import { typesPages } from "../../../../utils/constantes";

const CardProduto = ({ item: { item } }) => {
  const {
    onChangeItemValue,
    deleteItemListaCompas,
    setListaMercadoFinalizada,
    dadosProdutosLista,
    setTabPage,
    setProdutoEdit,
  } = useListaComprasContext();

  const createTwoButtonAlert = () =>
    Alert.alert("Fim da lista", "Deseja finalizar a compra?", [
      {
        text: "Não",
        style: "cancel",
      },
      { text: "Sim", onPress: () => setListaMercadoFinalizada(0) },
    ]);

  const clickItemEvent = async (type) => {
    const dadaoFilter = dadosProdutosLista.filter(
      (item) => !item.comprado && !item.falta
    );
    try {
      onChangeItemValue(!item[type], type, item.id);

      if (
        dadaoFilter.length === 1 &&
        (type === "falta" || type === "comprado")
      ) {
        createTwoButtonAlert();
      }
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <Card
      onLongPress={() => {
        setTabPage(typesPages.pageCadastroProduto);
        setProdutoEdit(item);
      }}
    >
      <View style={styles.containerImg}>
        <Image
          style={{ width: 100, height: 130 }}
          source={{ uri: getImageCategoria(item.categoria) }}
        />
      </View>
      <CardBody comprado={item.comprado} falta={item.falta}>
        <View style={styles.containerInfos}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={{ ...styles.text }}>{item.categoria}</Text>
        </View>
        <View style={styles.containerButton}>
          <View style={{ marginHorizontal: 4 }}>
            <Text
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
              }}
            >
              Qt.
            </Text>
            <Text style={styles.title}>{item.qt}</Text>
          </View>

          {item.falta || item.comprado ? (
            <Icon
              name="recycle-variant"
              size={28}
              onPress={() => {
                item.falta
                  ? onChangeItemValue(false, "falta", item.id)
                  : onChangeItemValue(false, "comprado", item.id);
              }}
              style={{
                paddingTop: 16,
                marginHorizontal: 8,
              }}
            />
          ) : (
            <>
              <Icon
                name="check"
                size={30}
                onPress={() => clickItemEvent("comprado")}
                style={{
                  color: "green",
                  paddingTop: 16,
                  marginHorizontal: 8,
                }}
              />
              <Icon
                name="magnify-remove-outline"
                size={28}
                onPress={() => clickItemEvent("falta")}
                style={{
                  color: "red",
                  paddingTop: 16,
                  marginHorizontal: 8,
                }}
              />
            </>
          )}
          <Icon
            name="delete-outline"
            size={16}
            onPress={() => {
              deleteItemListaCompas(item.id);
            }}
            style={{
              paddingTop: 16,
              marginHorizontal: 8,
              color: "grey",
            }}
          />
        </View>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    width: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    zIndex: 5,
  },
  title: {
    fontWeight: "700",
    fontSize: 26,
    color: "#000",
  },
  containerInfos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: { color: "#000" },
});

export default CardProduto;
