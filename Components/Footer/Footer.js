import { View } from "react-native";

import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { TabItem } from "./Footer.style";

const Footer = ({ tabSelected, onChangeTab, typesTab }) => {
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
      <TabItem tabSelected={tabSelected} tabTitle={typesTab.tabComprados}>
        <Stack center>
          <IconButton
            icon={(props) => <Icon name="cart" {...props} />}
            onPress={() => onChangeTab(typesTab.tabComprados)}
          />
        </Stack>
      </TabItem>
    </View>
  );
};

export default Footer;
