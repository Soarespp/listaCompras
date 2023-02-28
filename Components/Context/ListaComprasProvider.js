import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { mockListaCompras } from "../../mocks/mockListaCompras";
import { ListaComprasContext } from "./ListaComprasContext";

const defaultValues = {
  evento: { id: 0, name: "", comprado: false, falta: false, qt: 0 },
};

export const ListaComprasProvider = ({ children }) => {
  const [listaCompras, setListaCompras] = useState(mockListaCompras?.itens);
  const [dadosLista, setDadosLista] = useState(mockListaCompras);

  const [cadOpen, setCadOpen] = useState(false);

  const changeListaCompras = (value) => setListaCompras(value);
  const changeDadosLista = (value) => setDadosLista(value);
  const changeCadOpen = () => setCadOpen((oldvalue) => !oldvalue);

  const addItensListaCompras = async (value) => {
    let maxValue = listaCompras.sort((a, b) => b.id - a.id)[0]?.id || 0;
    maxValue = maxValue + 1;

    let dadoCache = [
      ...listaCompras,
      { ...defaultValues["evento"], ...value, id: maxValue },
    ];

    const jsonDadosCache = JSON.stringify(dadoCache);

    await AsyncStorage.setItem("listaDados", jsonDadosCache);

    setListaCompras((oldValues) => [
      ...oldValues,
      { ...defaultValues["evento"], ...value, id: maxValue },
    ]);
  };

  const onChangeItemValue = (value, name, id) => {
    let newValue = listaCompras.find((itens) => itens.id === id);
    newValue = { ...newValue, [name]: value };
    setListaCompras((oldLista) => [
      ...oldLista.filter((itens) => itens.id !== id),
      newValue,
    ]);
  };

  const saveJsonData = (value) => {
    console.log("saveJsonData");
  };

  const getDadosStorage = async () => {
    const jsonValue = await AsyncStorage.getItem("listaDados");
    if (jsonValue != null) {
      const dadosJson = JSON.parse(jsonValue);
      setListaCompras(dadosJson);
    }
  };

  return (
    <ListaComprasContext.Provider
      value={{
        listaCompras,
        cadOpen,
        dadosLista,
        changeListaCompras,
        addItensListaCompras,
        onChangeItemValue,
        changeCadOpen,
        saveJsonData,
        changeDadosLista,
        getDadosStorage,
      }}
    >
      {children}
    </ListaComprasContext.Provider>
  );
};
