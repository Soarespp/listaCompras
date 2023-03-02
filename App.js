import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import ContainerListaCompras from "./Content/ContainerListaCompras/ContainerListaCompras";
import { ListaComprasProvider } from "./Components/Context/ListaComprasProvider";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <View>
      <ListaComprasProvider>
        <Header />
        <ContainerListaCompras />
        <StatusBar style="auto" />
      </ListaComprasProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "block",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
