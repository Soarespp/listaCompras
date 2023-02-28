import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import ContainerCadastroItem from "../ContainerCadastroItem/ContainerCadastroItem";
import { useListaComprasContext } from "../Context";
import Footer from "../Footer/Footer";
import ListaCompras from "../ListaCompras/ListaCompras";

const typesTab = { tabLista: "tabLista", tabComprados: "tabCompras" };

const ContainerListaCompras = () => {
  const { listaCompras, cadOpen, dadosLista, getDadosStorage } =
    useListaComprasContext();
  const [tabSelected, setTabSelected] = useState(typesTab.tabLista);

  useEffect(() => {
    getDadosStorage();
  }, []);

  return (
    <ScrollView>
      {cadOpen && <ContainerCadastroItem />}
      <View style={{ height: "90%" }}>
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
    </ScrollView>
  );
};

export default ContainerListaCompras;
