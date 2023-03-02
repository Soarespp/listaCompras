import { HStack, IconButton, Stack } from "@react-native-material/core";
import { useState } from "react";
import {
  Button,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { useListaComprasContext } from "../Context";
import { Campo, CampoText, CampoTitulo } from "./ListaCompras.style";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ListaCompras = ({ title = "", lista }) => {
  const { onChangeItemValue, deleteItemListaCompas } = useListaComprasContext();
  const [excl, setExcl] = useState(false);

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
          <TouchableNativeFeedback
            delayLongPress={1500}
            onPressIn={() => {
              setExcl(true);
            }}
            onLongPress={() => {
              deleteItemListaCompas(itens.id);
              setExcl(false);
            }}
            onPressOut={() => setExcl(false)}
            background={TouchableNativeFeedback.Ripple("red", false)}
          >
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
                      itens.comprado
                        ? onChangeItemValue(
                            !itens.comprado,
                            "comprado",
                            itens.id
                          )
                        : onChangeItemValue(!itens.falta, "falta", itens.id)
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
              <Campo width={25}>
                <CampoText>{itens.name}</CampoText>
              </Campo>
              {!excl ? (
                <Campo>
                  <CampoText>{itens.qt}</CampoText>
                </Campo>
              ) : (
                <Campo>
                  <HStack>
                    <IconButton
                      icon={(props) => (
                        <Icon name="delete-outline" {...props} />
                      )}
                      onPress={() => changeCadOpen()}
                    />
                  </HStack>
                </Campo>
              )}
            </View>
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListaCompras;
