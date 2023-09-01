import { Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 100,
      }}
    >
      <View style={{ paddingLeft: 8, flex: 1 }}>
        <Text style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>
          Lista de Compras
        </Text>
        <Text style={{ color: "grey", fontSize: 24 }}>
          Segue lista para compras...
        </Text>
      </View>
    </View>
  );
};

export default Header;
