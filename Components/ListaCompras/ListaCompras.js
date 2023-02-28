import { Button, ScrollView, Text, View } from "react-native";
import { useListaComprasContext } from "../Context";
import { Campo, CampoText, CampoTitulo } from "./ListaCompras.style";

const ListaCompras = ({ title = "", lista }) => {
  const { onChangeItemValue } = useListaComprasContext();

  return (
    <View style={{ height: 640 }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "550",
            paddingLeft: 2,
            backgroundColor: "white",
          }}
        >
          {title || "lista compras"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 2,
          }}
        >
          <CampoTitulo>
            <CampoText>Comprado</CampoText>
          </CampoTitulo>
          <CampoTitulo>
            <CampoText>Faltando</CampoText>
          </CampoTitulo>
          <CampoTitulo width={30}>
            <CampoText>Nome</CampoText>
          </CampoTitulo>
          <CampoTitulo>
            <CampoText>qt</CampoText>
          </CampoTitulo>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#e2e2e2", margin: 10 }}>
        {lista?.map((itens) => (
          <View
            style={{
              flexDirection: "row",
              margin: 2,
              backgroundColor: "#fff",
            }}
            key={itens.id}
          >
            <Campo>
              {itens.comprado || itens.falta ? (
                <Button
                  title="Desfazer"
                  color="#009093"
                  width={43}
                  onPress={() =>
                    onChangeItemValue(!itens.comprado, "comprado", itens.id)
                  }
                />
              ) : (
                <Button
                  title="Ok"
                  color="#009093"
                  onPress={() =>
                    onChangeItemValue(!itens.comprado, "comprado", itens.id)
                  }
                />
              )}
            </Campo>
            <Campo>
              {itens.comprado || itens.falta ? null : (
                <Button
                  title="Falta"
                  color="#009093"
                  onPress={() =>
                    onChangeItemValue(!itens.falta, "falta", itens.id)
                  }
                />
              )}
            </Campo>
            <Campo width={30}>
              <CampoText>{itens.name}</CampoText>
            </Campo>
            <Campo>
              <CampoText>{itens.qt}</CampoText>
            </Campo>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListaCompras;
