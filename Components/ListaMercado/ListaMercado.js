import ContainerHistorico from "../../Content/ContainerHistorico/ContainerHistorico";
import ContainerListaCompras from "../../Content/ContainerListaCompras/ContainerListaCompras";
import ContainerMenu from "../../Content/ContainerMenu";
import Header from "../Header/Header";
import ImportItens from "../ImportItens";
import { useListaComprasContext } from "../Context";
import { typesPages } from "../../utils/constantes";
import ContainerPagamento from "../../Content/ContainerPagamento";
import ContainerInfo from "../../Content/ContainerInfo";

const ListaMercado = () => {
  const { tabPage, menuOpen } = useListaComprasContext();
  return (
    <>
      <Header />
      {menuOpen && <ContainerMenu />}
      {tabPage === typesPages.pageHistorico && <ContainerHistorico />}
      {tabPage === typesPages.pageImports && <ImportItens />}
      {tabPage === typesPages.pageHome && <ContainerListaCompras />}
      {tabPage === typesPages.pagePagamento && <ContainerPagamento />}
      {tabPage === typesPages.pageInformacoes && <ContainerInfo />}
    </>
  );
};

export default ListaMercado;
