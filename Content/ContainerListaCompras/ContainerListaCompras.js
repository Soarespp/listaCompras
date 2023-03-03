import { Stack, TextInput } from "@react-native-material/core";

import { useEffect } from "react";
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
    (!listaCompras || listaCompras.length === 0) && getDadosStorage();
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
                lista={listaCompras
                  .filter((itemLista) => itemLista.finalizada === false)
                  .shift()
                  ?.itens.filter((itens) => !itens.comprado && !itens.falta)}
              />
            ) : (
              <ListaCompras
                title="Carrinho"
                lista={listaCompras
                  .filter((itemLista) => itemLista.finalizada === false)
                  .shift()
                  ?.itens.filter((itens) => itens.comprado || itens.falta)}
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
