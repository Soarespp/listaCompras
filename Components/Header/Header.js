import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useListaComprasContext } from "../Context";

const Header = () => {
  const { changeMenuOpen, changeCadOpen } = useListaComprasContext();
  return (
    <AppBar
      style={{ paddingTop: 40 }}
      title="Lista Mercado"
      centerTitle={true}
      color="#009093"
      tintColor="#f3d872"
      leading={(props) => (
        <IconButton
          icon={(props) => (
            <Icon name="menu" {...props} onPress={changeMenuOpen} />
          )}
          {...props}
        />
      )}
      trailing={(props) => (
        <HStack>
          <IconButton
            icon={(props) => <Icon name="plus" {...props} />}
            {...props}
            onPress={() => changeCadOpen()}
          />
        </HStack>
      )}
    />
  );
};

export default Header;
