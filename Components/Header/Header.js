import { AppBar, FAB, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Pressable, Text, View } from "react-native";
import { useListaComprasContext } from "../Context";
import styled from "styled-components";

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
    // <View
    //   style={{
    //     borderBottom: "2px solid #000",
    //     backgroundColor: "#009093",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     fontWeight: "750",
    //     flexDirection: "row",
    //   }}
    // >
    //   <Text
    //     style={{
    //       fontSize: 25,
    //       fontWeight: "bold",
    //       marginTop: "13%",
    //       width: "80%",
    //       paddingBottom: 10,
    //       color: "#009093",
    //     }}
    //   >
    //     Lista de Mercado
    //   </Text>
    //   <View>
    //     {!cadOpen && (
    //       <View style={{ paddingTop: 40 }}>
    //         <FAB
    //           icon={(props) => (
    //             <Icon name="plus" {...props} onPress={() => changeCadOpen()} />
    //           )}
    //           size="mini"
    //           color="#f3d872"
    //         />
    //       </View>
    //     )}
    //   </View>
    // </View>
  );
};

export default Header;
