import { Pressable, StyleSheet, Text, View } from "react-native";

import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { useListaComprasContext } from "../Context";
import { typesPages } from "../../utils/constantes";

const StarMenu = () => {
  const { setTabPage, setListaMercadoFinalizada, listaCompras } =
    useListaComprasContext();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <IconButton
        style={showMenu ? styles.menuOpen : styles.menuClose}
        icon={(props) => <Icon name="plus" {...props} />}
        onPress={() => {
          setShowMenu((old) => !old);
        }}
      />
      {showMenu && (
        <View style={styles.containerMenu}>
          <Pressable
            style={{ ...styles.containerItemMenu, right: -20 }}
            onPress={() => {
              setTabPage(typesPages.pageCadastroProduto);
              setShowMenu(false);
            }}
          >
            <Text style={styles.textItemMenu}>Adicionar Produto</Text>
          </Pressable>
          <Pressable
            style={{ ...styles.containerItemMenu, right: +10, top: +5 }}
            onPress={() => {
              setTabPage(typesPages.pageImports);
              setShowMenu(false);
            }}
          >
            <Text style={styles.textItemMenu}>Adicionar Lista</Text>
          </Pressable>
          <Pressable
            style={{
              ...styles.containerItemMenu,
              right: -20,
              top: +10,
              zIndex: 12,
            }}
            disabled={
              listaCompras.filter((itemLM) => !itemLM.finalizada).length === 0
            }
            onPress={() => {
              setListaMercadoFinalizada(0);
              setTabPage(typesPages.pageHistorico);
              setShowMenu(false);
            }}
          >
            <Text style={styles.textItemMenu}>Finalizar Compra</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerMenu: {
    position: "absolute",
    top: 80,
    right: 75,
    zIndex: 999,
    minWidth: 150,
    display: "flex",
    alignItems: "flex-end",
  },
  menuClose: {
    backgroundColor: "#0ef6cc",
    position: "absolute",
    right: 8,
    top: 120,
    zIndex: 999,
  },
  menuOpen: {
    backgroundColor: "#0ef6cc",
    position: "absolute",
    right: 12,
    top: 130,
    zIndex: 999,
  },
  containerItemMenu: {
    backgroundColor: "#0ef6cc",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 6,
    marginVertical: 6,
    fontSize: 80,
    borderColor: "#fff",
  },
  textItemMenu: {
    fontSize: 30,
  },
});

export default StarMenu;
