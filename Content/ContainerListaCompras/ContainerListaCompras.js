import { Stack, TextInput } from "@react-native-material/core";

import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import ContainerCadastroItem from "../ContainerCadastroItem/ContainerCadastroItem";
import { useListaComprasContext } from "../../Components/Context";
import Footer from "../../Components/Footer/Footer";
import ListaCompras from "../../Components/ListaCompras/ListaCompras";
import { typesTab } from "../../utils/constantes";

const ContainerListaCompras = () => {
  const {
    listaCompras,
    cadOpen,
    getDadosStorage,
    setTabSelected,
    tabSelected,
  } = useListaComprasContext();

  useEffect(() => {
    getDadosStorage();
  }, []);

  return (
    <ScrollView divider>
      {cadOpen ? (
        <ContainerCadastroItem />
      ) : (
        <Stack>
          <View>
            {tabSelected === typesTab.tabLista ? (
              <ListaCompras
                title="Aguardando compra"
                lista={listaCompras.filter(
                  (itens) => itens.comprado === false && itens.falta === false
                )}
              />
            ) : (
              <ListaCompras
                title="Lista já comprados"
                lista={listaCompras.filter(
                  (itens) => itens.comprado || itens.falta
                )}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 2,
              height: 60,
            }}
          >
            <Footer
              tabSelected={tabSelected}
              onChangeTab={setTabSelected}
              typesTab={typesTab}
            />
          </View>
        </Stack>
      )}
    </ScrollView>
  );
};

export default ContainerListaCompras;
