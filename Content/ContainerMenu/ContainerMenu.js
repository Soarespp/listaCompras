import { IconButton, Stack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useListaComprasContext } from "../../Components/Context";
import { typesPages } from "../../utils/constantes";

const ContainerMenu = () => {
  const { tabPage, clearAllLista, changeMenuOpen, setTabPage } =
    useListaComprasContext();

  return (
    <Stack
      center
      m={4}
      spacing={6}
      direction="row"
      style={{ backgroundColor: "#e2e2e2" }}
    >
      <IconButton
        icon={(props) => <Icon name="home-outline" {...props} />}
        color="#009093"
        tintColor="yellow"
        onPress={() => {
          setTabPage(typesPages.pageHome);
          changeMenuOpen();
        }}
      />
      <IconButton
        icon={(props) => <Icon name="file-download-outline" {...props} />}
        color="#009093"
        tintColor="yellow"
        onPress={() => {
          setTabPage(typesPages.pageImports);
          changeMenuOpen();
        }}
      />
      <IconButton
        icon={(props) => <Icon name="trash-can-outline" {...props} />}
        size="mini"
        color="#009093"
        tintColor="yellow"
        disabled={tabPage !== typesPages.pageHome}
        onPress={() => {
          clearAllLista("lista");
          changeMenuOpen();
        }}
      />
      <IconButton
        icon={(props) => <Icon name="history" {...props} />}
        size="mini"
        color="#009093"
        tintColor="yellow"
        onPress={() => {
          setTabPage(typesPages.pageHistorico);
          changeMenuOpen();
        }}
      />
    </Stack>
  );
};

export default ContainerMenu;
