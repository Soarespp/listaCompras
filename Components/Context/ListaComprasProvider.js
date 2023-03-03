import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { mockListaCompras } from "../../mocks/mockListaCompras";
import {
  defaultListaCompra,
  defaultValues,
  typesPages,
  typesTab,
} from "../../utils/constantes";
import { ListaComprasContext } from "./ListaComprasContext";

export const ListaComprasProvider = ({ children }) => {
  const [listaCompras, setListaCompras] = useState([]);
  const [dadosLista, setDadosLista] = useState(mockListaCompras);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tabPage, setTabPage] = useState(typesPages.pageHome);
  const [tabSelected, setTabSelected] = useState(typesTab.tabLista);
  const [cadOpen, setCadOpen] = useState(false);

  const changeDadosLista = (value) => setDadosLista(value);
  const changeCadOpen = () => setCadOpen((oldvalue) => !oldvalue);

  const atualizarDadosLista = async (dados) => {
    setListaCompras(dados);
    const jsonDadosCache = JSON.stringify(dados);
    await AsyncStorage.setItem("listaDados", jsonDadosCache);
  };

  const addItemListaCompras = async (value) => {
    if (listaCompras.filter((item) => !item.finalizada).length === 0) {
      atualizarDadosLista([
        ...listaCompras,
        {
          ...defaultListaCompra,
          maxIdItens: 0,
          itens: [{ ...defaultValues, ...value, id: 0 }],
        },
      ]);
      return;
    }

    const maxID =
      listaCompras
        .find((itemLM) => !itemLM.finalizada)
        ?.itens.sort((a, b) => b.id - a.id)[0]?.id || 0;

    var cachItens = [
      ...listaCompras.find((itemLM) => !itemLM.finalizada)?.itens,
      { ...defaultValues, ...value, id: Number(maxID) + 1 },
    ];

    var cachListaCompras = [
      ...listaCompras.filter((itemLC) => itemLC.finalizada),
      {
        ...listaCompras.find((itemLC) => !itemLC.finalizada),
        itens: cachItens,
      },
    ];

    atualizarDadosLista(cachListaCompras);
  };

  const addItensListaCompras = (dadosUpdate) => {
    var maxValue =
      Number(
        listaCompras
          .find((itemLM) => !itemLM.finalizada)
          ?.itens.sort((a, b) => b.id - a.id)[0]?.id
      ) || 0;

    var dadosCache = dadosUpdate.map((item, idx) => {
      if (!item?.id) {
        maxValue = maxValue + 1;
        const testeNovo = {
          ...item,
          id: maxValue,
          comprado: false,
          falta: false,
        };

        return testeNovo;
      }
    });

    if (listaCompras.filter((item) => !item.finalizada).length === 0) {
      atualizarDadosLista([
        ...listaCompras,
        {
          ...defaultListaCompra,
          itens: [...dadosCache],
        },
      ]);
      return;
    }

    var cachItens = [
      ...listaCompras.find((itemLM) => !itemLM.finalizada)?.itens,
      ...dadosCache,
    ];

    var cachListaCompras = [
      ...listaCompras.filter((itemLC) => itemLC.finalizada),
      {
        ...listaCompras.find((itemLC) => !itemLC.finalizada),
        itens: cachItens,
      },
    ];
    atualizarDadosLista(cachListaCompras);
  };

  const onChangeItemValue = (value, name, id) => {
    var cacheListaCompra = listaCompras.find((itemLM) => !itemLM.finalizada);

    var cacheItensCompra = [
      ...cacheListaCompra?.itens.filter((itens) => itens.id !== id),
      {
        ...cacheListaCompra?.itens.find((itens) => itens.id === id),
        [name]: value,
      },
    ];

    cacheListaCompra = [
      ...listaCompras.filter((itemLM) => itemLM.finalizada),
      {
        ...listaCompras.find((itemLM) => !itemLM.finalizada),
        itens: cacheItensCompra,
      },
    ];

    atualizarDadosLista(cacheListaCompra);
  };

  const getDadosStorage = async () => {
    const jsonValue = await AsyncStorage.getItem("listaDados");
    if (jsonValue != null) {
      const dadosJson = JSON.parse(jsonValue);
      setListaCompras(dadosJson);
      return;
    }
  };

  const changeMenuOpen = () => setMenuOpen((oldValue) => !oldValue);

  const clearAllLista = async () => {
    const dadosUpdate = [...listaCompras.filter((itens) => itens.finalizada)];
    atualizarDadosLista(dadosUpdate);
  };

  const deleteItemListaCompas = (id) => {
    var cacheListaCompra = listaCompras.find((itemLM) => !itemLM.finalizada);

    var cacheItensCompra = [
      ...cacheListaCompra?.itens.filter((itens) => itens.id !== id),
    ];

    cacheListaCompra = [
      ...listaCompras.filter((itemLM) => itemLM.finalizada),
      {
        ...cacheListaCompra,
        itens: cacheItensCompra,
      },
    ];

    atualizarDadosLista(cacheListaCompra);
  };

  const setListaMercadoFinalizada = (valueLista) => {
    const cacheLista = [
      ...listaCompras.filter((itemLM) => itemLM.finalizada),
      {
        ...listaCompras.find((itemLM) => !itemLM.finalizada),
        finalizada: true,
        value: valueLista,
      },
    ];

    atualizarDadosLista(cacheLista);
  };

  const clearAllItensLista = () => {
    const dadoListaCache = [
      ...listaCompras.filter((lista) => lista.finalizada),
      {
        ...listaCompras.find((lista) => !lista.finalizada),
        itens: [],
      },
    ];

    atualizarDadosLista(dadoListaCache);
  };

  const excluirListaMercado = (data) => {
    const dadosCache = listaCompras.filter((item) => item.dataLista !== data);
    atualizarDadosLista(dadosCache);
  };

  const changeListaMercadoFinalizada = (data) => {
    var dadosCache = [];
    const haveOpen = listaCompras.find((item) => !item.finalizada);
    if (!!haveOpen) {
      dadosCache = [
        ...listaCompras.filter(
          (item) => item.finalizada && item.dataLista !== data
        ),
        { ...haveOpen, finalizada: true },
        {
          ...listaCompras.find((item) => item.dataLista === data),
          itens: [
            ...listaCompras
              .find((item) => item.dataLista === data)
              .itens.map((item) => ({
                ...item,
                falta: false,
                comprado: false,
              })),
          ],
          finalizada: false,
        },
      ];
      atualizarDadosLista(dadosCache);
      return;
    }

    dadosCache = [
      ...listaCompras.filter(
        (item) => item.finalizada && item.dataLista !== data
      ),
      {
        ...listaCompras.find((item) => item.dataLista === data),
        itens: [
          ...listaCompras
            .find((item) => item.dataLista === data)
            .itens.map((item) => ({ ...item, falta: false, comprado: false })),
        ],
        finalizada: false,
      },
    ];

    atualizarDadosLista(dadosCache);
  };

  return (
    <ListaComprasContext.Provider
      value={{
        listaCompras,
        cadOpen,
        setListaCompras,
        dadosLista,
        menuOpen,
        tabPage,
        tabSelected,
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
        changeListaMercadoFinalizada,
        setListaMercadoFinalizada,
        clearAllItensLista,
        atualizarDadosLista,
        excluirListaMercado,
      }}
    >
      {children}
    </ListaComprasContext.Provider>
  );
};
