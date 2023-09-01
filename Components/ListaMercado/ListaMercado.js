import { StyleSheet, View } from "react-native";

import ContainerHistorico from "../../Content/ContainerHistorico/ContainerHistorico";
import ContainerListaCompras from "../../Content/ContainerListaCompras/ContainerListaCompras";
import ContainerInfo from "../../Content/ContainerInfo";
import { typesPages } from "../../utils/constantes";
import ContentFilter from "../../Content/ContentFilter/ContentFilter";
import ContainerCadastroItem from "../../Content/ContainerCadastroItem/ContainerCadastroItem";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImportItens from "../ImportItens";
import StarMenu from "../StarMenu";

import { useListaComprasContext } from "../Context";

const ListaMercado = () => {
  const { tabPage, setTabSelected, setTabPage } = useListaComprasContext();
  return (
    <View
      style={{
        backgroundColor: "#1b2223",
        position: "relative",
        height: "100%",
      }}
    >
      <Header />
      <StarMenu />
      <View
        style={{
          position: "relative",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#262933",
            flex: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          {tabPage === typesPages.pageHome && (
            <>
              <ContentFilter />
              <ContainerListaCompras />
            </>
          )}
          {tabPage === typesPages.pageHistorico && <ContainerHistorico />}
          {tabPage === typesPages.pageImports && <ImportItens />}
          {tabPage === typesPages.pageCadastroProduto && (
            <ContainerCadastroItem />
          )}
          {tabPage === typesPages.pageInformacoes && <ContainerInfo />}
        </View>
      </View>
      {(tabPage === typesPages.pageHome ||
        tabPage === typesPages.pageHistorico ||
        tabPage === typesPages.pageInformacoes) && (
        <Footer onChangeTab={setTabSelected} onChangePage={setTabPage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ListaMercado;
