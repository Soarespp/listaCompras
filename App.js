import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { ListaComprasProvider } from "./Components/Context/ListaComprasProvider";
import ListaMercado from "./Components/ListaMercado";

export default function App() {
  return (
    <View>
      <ListaComprasProvider>
        <ListaMercado />
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
