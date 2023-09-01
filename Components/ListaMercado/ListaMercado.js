import ContainerHistorico from "../../Content/ContainerHistorico/ContainerHistorico";
import ContainerListaCompras from "../../Content/ContainerListaCompras/ContainerListaCompras";
import ContainerMenu from "../../Content/ContainerMenu";
import Header from "../Header/Header";
import ImportItens from "../ImportItens";
import { useListaComprasContext } from "../Context";
import { typesPages } from "../../utils/constantes";
import ContainerPagamento from "../../Content/ContainerPagamento";
import ContainerInfo from "../../Content/ContainerInfo";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Footer from "../Footer/Footer";
import ContentFilter from "../../Content/ContentFilter/ContentFilter";
import ContainerCadastroItem from "../../Content/ContainerCadastroItem/ContainerCadastroItem";
import StarMenu from "../StarMenu";

const ListaMercado = () => {
  const { tabPage, menuOpen, setTabSelected, setTabPage } =
    useListaComprasContext();
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
