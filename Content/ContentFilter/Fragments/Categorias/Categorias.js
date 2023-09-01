import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { defaultCategorias } from "../../../../utils/constantes";

const Categorias = ({ filterCategoria, setFilterCategoria }) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        backgroundColor: "#1B223",
        marginVertical: 8,
      }}
    >
      <ScrollView horizontal={true}>
        {defaultCategorias
          ?.sort((a, b) => (a.name > b.name ? 0 : -1))
          .map((categoria) => (
            <Pressable
              key={categoria.id}
              style={
                filterCategoria === categoria.name
                  ? styles.selected
                  : styles.contentCate
              }
              onPress={() => {
                if (filterCategoria === categoria.name) {
                  return setFilterCategoria(undefined);
                }
                setFilterCategoria(categoria.name);
              }}
            >
              <Text style={{ color: "#000" }}>{categoria.name}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentCate: {
    borderWidth: 1,
    margin: 4,
    borderRadius: 12,
    padding: 8,
    borderColor: "#0ef6cc",
    backgroundColor: "#fff",
    color: "#000",
  },
  selected: {
    borderWidth: 1,
    borderColor: "#0ef6cc",
    margin: 4,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#0ef6cc",
  },
});

export default Categorias;
