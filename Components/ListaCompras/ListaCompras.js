import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useListaComprasContext } from "../Context";

import CardProduto from "./components/CardProduto/CardProduto";

const ListaCompras = ({ lista }) => {
  const { allFilters } = useListaComprasContext();
  const regex = new RegExp(`^(.*)${allFilters.filterItemLista}(.*)$`, "ig");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lista
          ?.filter(
            (item) =>
              item.categoria === allFilters.filterCategoria ||
              !allFilters.filterCategoria
          )
          ?.filter(
            (item) => !allFilters.filterItemLista || item?.name.match(regex)
          )
          ?.sort((a, b) => {
            if (b.categoria > a.categoria) {
              return -1;
            }
            if (b.categoria < a.categoria) {
              return 0;
            }
          })}
        renderItem={(item) => <CardProduto item={item} />}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 110,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListaCompras;
