import { IconButton, Stack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useListaComprasContext } from "../../Components/Context";

const ContainerMenu = () => {
  const { changeOpenImportOptions, clearAllLista, changeMenuOpen } =
    useListaComprasContext();

  return (
    <Stack
      center
      m={4}
      spacing={6}
      direction="row-reverse"
      style={{ backgroundColor: "#e2e2e2" }}
    >
      <IconButton
        icon={(props) => <Icon name="file-download-outline" {...props} />}
        color="#009093"
        tintColor="yellow"
        onPress={() => changeOpenImportOptions("lista")}
      />
      <IconButton
        icon={(props) => <Icon name="trash-can" {...props} />}
        size="mini"
        color="#009093"
        tintColor="yellow"
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
        // onPress={() => clearAllLista("lista")}
      />
    </Stack>
  );
};

export default ContainerMenu;
