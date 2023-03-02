import ContainerHistorico from "../../Content/ContainerHistorico/ContainerHistorico";
import ContainerListaCompras from "../../Content/ContainerListaCompras/ContainerListaCompras";
import ContainerMenu from "../../Content/ContainerMenu";
import Header from "../Header/Header";
import ImportItens from "../ImportItens";
import { useListaComprasContext } from "../Context";
import { typesPages } from "../../utils/constantes";

const ListaMercado = () => {
  const { tabPage, menuOpen } = useListaComprasContext();
  return (
    <>
      <Header />
      {menuOpen && <ContainerMenu />}
      {tabPage === typesPages.pageHistorico && <ContainerHistorico />}
      {tabPage === typesPages.pageImports && <ImportItens />}
      {tabPage === typesPages.pageHome && <ContainerListaCompras />}
    </>
  );
};

export default ListaMercado;
