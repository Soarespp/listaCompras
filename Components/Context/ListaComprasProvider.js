import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { mockListaCompras } from "../../mocks/mockListaCompras";
import { defaultValues, typesPages, typesTab } from "../../utils/constantes";
import { ListaComprasContext } from "./ListaComprasContext";

export const ListaComprasProvider = ({ children }) => {
  const [listaCompras, setListaCompras] = useState(mockListaCompras?.itens);
  const [dadosLista, setDadosLista] = useState(mockListaCompras);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tabPage, setTabPage] = useState(typesPages.pageHome);
  const [tabSelected, setTabSelected] = useState(typesTab.tabLista);
  const [cadOpen, setCadOpen] = useState(false);

  const changeListaCompras = (value) => setListaCompras(value);
  const changeDadosLista = (value) => setDadosLista(value);
  const changeCadOpen = () => setCadOpen((oldvalue) => !oldvalue);

  const atualizarDadosLista = async (dados) => {
    const jsonDadosCache = JSON.stringify(dados);
    await AsyncStorage.setItem("listaDados", jsonDadosCache);

    setListaCompras(dados);
  };

  const addItemListaCompras = (value) => {
    let maxValue = listaCompras.sort((a, b) => b.id - a.id)[0]?.id || 0;
    maxValue = maxValue + 1;

    let dadoCache = [
      ...listaCompras,
      { ...defaultValues["evento"], ...value, id: maxValue },
    ];

    atualizarDadosLista(dadoCache);
  };

  const addItensListaCompras = (dadosUpdate) => {
    let maxValue = listaCompras.sort((a, b) => b.id - a.id)[0]?.id || 0;

    var dadosCache = dadosUpdate.map((item) => {
      if (!item?.id) {
        maxValue = maxValue + 1;
        return { ...item, id: maxValue, comprado: false, falta: false };
      }
    });

    atualizarDadosLista([...listaCompras, ...dadosCache]);
  };

  const onChangeItemValue = (value, name, id) => {
    let newValue = listaCompras.find((itens) => itens.id === id);
    newValue = { ...newValue, [name]: value };
    setListaCompras((oldLista) => [
      ...oldLista.filter((itens) => itens.id !== id),
      newValue,
    ]);
  };

  const getDadosStorage = async () => {
    const jsonValue = await AsyncStorage.getItem("listaDados");
    if (jsonValue != null) {
      const dadosJson = JSON.parse(jsonValue);
      setListaCompras(dadosJson);
    }
  };

  const changeMenuOpen = () => setMenuOpen((oldValue) => !oldValue);

  const clearAllLista = async () => {
    setListaCompras([]);
    await AsyncStorage.removeItem("listaDados");
  };

  const deleteItemListaCompas = (id) => {
    const newLista = listaCompras.filter((item) => item.id !== id);

    atualizarDadosLista(newLista);
  };

  return (
    <ListaComprasContext.Provider
      value={{
        listaCompras,
        cadOpen,
        dadosLista,
        menuOpen,
        tabPage,
        tabSelected,
        changeListaCompras,
        addItensListaCompras,
        onChangeItemValue,
        changeCadOpen,
        changeDadosLista,
        getDadosStorage,
        changeMenuOpen,
        clearAllLista,
        deleteItemListaCompas,
        addItemListaCompras,
        setTabSelected,
        setTabPage,
      }}
    >
      {children}
    </ListaComprasContext.Provider>
  );
};
