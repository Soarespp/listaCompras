import { View } from "react-native";

import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { TabItem } from "./Footer.style";
import { typesTab } from "../../utils/constantes";

const Footer = ({ tabSelected, onChangeTab }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 2,
        height: 60,
      }}
    >
      <TabItem tabSelected={tabSelected} tabTitle={typesTab.tabLista}>
        <Stack center>
          <IconButton
            onPress={() => onChangeTab(typesTab.tabLista)}
            icon={(props) => <Icon name="clipboard-list-outline" {...props} />}
          />
        </Stack>
      </TabItem>
      <TabItem tabSelected={tabSelected} tabTitle={typesTab.tabCarrinho}>
        <Stack center>
          <IconButton
            icon={(props) => <Icon name="cart-variant" {...props} />}
            onPress={() => onChangeTab(typesTab.tabCarrinho)}
          />
        </Stack>
      </TabItem>
    </View>
  );
};

export default Footer;
