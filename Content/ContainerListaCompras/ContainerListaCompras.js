import { useEffect } from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import { useListaComprasContext } from "../../Components/Context";
import ListaCompras from "../../Components/ListaCompras/ListaCompras";
import { typesTab } from "../../utils/constantes";

const ContainerListaCompras = () => {
  const { listaCompras, getDadosStorage, tabSelected } =
    useListaComprasContext();

  useEffect(() => {
    if (!listaCompras || listaCompras.length === 0) {
      getDadosStorage();
    }
  }, []);

  return (
    <View style={styles.container}>
      {tabSelected === typesTab.tabLista ? (
        <ListaCompras
          lista={listaCompras
            .filter((itemLista) => itemLista.finalizada === false)
            .shift()
            ?.itens.filter((itens) => !itens.comprado && !itens.falta)}
        />
      ) : (
        <ListaCompras
          title="Carrinho"
          lista={listaCompras
            .filter((itemLista) => itemLista.finalizada === false)
            .shift()
            ?.itens.filter((itens) => itens.comprado || itens.falta)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ContainerListaCompras;
