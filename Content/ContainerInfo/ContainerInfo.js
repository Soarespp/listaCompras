import { Text, View } from "react-native";

const ContainerInfo = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#e2e2e2",
          margin: 10,
          height: "100%",
          maxHeight: 600,
        }}
      >
        <View style={{ backgroundColor: "#fff", margin: 6 }}>
          <Text style={{ fontSize: 20, fontWeight: "800px" }}>
            Lista Mercado v. 1.0.2
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 20 }}>
            E um app para ajudar na compra de mercado, tendo a função de guardar
            histórico e recupera-lo. Pode-se informar no final da compra o valor
            para comparações futuras.
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 10 }}>
            Tem a opção de importar vários itens de uma vez, seguindo por quebra
            de linha e para pegar a quantidade separar por ":".
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 100 }}>
            Produção do grupo Pepeu's tec.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContainerInfo;
