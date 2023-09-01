import { Text } from "react-native";

import SearchItem from "./Fragments/SearchItem";
import Categorias from "./Fragments/Categorias";
import { useListaComprasContext } from "../../Components/Context";

const ContentFilter = () => {
  const { allFilters } = useListaComprasContext();
  return (
    <>
      <SearchItem
        filter={allFilters.filterItemLista}
        setFilter={allFilters.setFilterItemLista}
      />
      <Categorias
        filterCategoria={allFilters.filterCategoria}
        setFilterCategoria={allFilters.setFilterItemCategoria}
      />
    </>
  );
};

export default ContentFilter;
