import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Text, View } from "react-native";
import { useListaComprasContext } from "../Context";

const Header = () => {
  const { cadOpen, changeCadOpen } = useListaComprasContext();
  return (
    <View
      style={{
        borderBottom: "2px solid #000",
        backgroundColor: "#009093",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "750",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: "13%",
          width: "80%",
          paddingBottom: 10,
          color: "#f3d872",
        }}
      >
        Lista de Mercado
      </Text>
      <View>
        {!cadOpen && (
          <View style={{ paddingTop: 40 }}>
            <FAB
              icon={(props) => (
                <Icon name="plus" {...props} onPress={() => changeCadOpen()} />
              )}
              size="mini"
              color="#f3d872"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
