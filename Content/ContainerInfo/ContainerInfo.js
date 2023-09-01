import { Text, View } from "react-native";

const ContainerInfo = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1b2223",
        position: "relative",
        paddingTop: 12,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          margin: 8,
          padding: 8,
          display: "flex",
          borderRadius: 16,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Lista Mercado v. 2.0.0
        </Text>
        <Text style={{ fontSize: 16, paddingTop: 20 }}>
          E um app para ajudar na compra de mercado tendo a função de guardar
          historico e recuperar. Tem a opção de importar varios invés de uma vez
          seguindo, por quebra de linha e para pegar a quantidade separar por
          ":" e infomar com separado ";" para colocar a cátegoria.
        </Text>
        <Text style={{ fontSize: 16, paddingTop: 100, fontWeight: "bold" }}>
          Produção do grupo Pepeu's tec.
        </Text>
      </View>
    </View>
  );
};

export default ContainerInfo;
