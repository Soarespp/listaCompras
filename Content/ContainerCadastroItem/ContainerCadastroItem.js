import { useForm, Controller } from "react-hook-form";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useListaComprasContext } from "../../Components/Context";
import { defaultCategorias, typesPages } from "../../utils/constantes";
import {
  getIdCategoria,
  getImageCategoria,
  getInfoCategoria,
} from "../../utils/imagensCategorias";
import { useEffect, useState } from "react";

const INIT_PRODUTO = { name: "", qt: 1, categoria: "gr" };

const ContainerCadastroItem = () => {
  const {
    addItemListaCompras,
    setTabPage,
    produtoEdit,
    setProdutoEdit,
    updateItemListaCompras,
  } = useListaComprasContext();
  const [produtoState, setProdutoState] = useState(INIT_PRODUTO);

  useEffect(() => {
    if (produtoEdit) {
      setProdutoState({
        ...produtoEdit,
        categoria: getIdCategoria(produtoEdit.categoria),
      });
    }
  }, [produtoEdit]);

  const handleClose = () => {
    setProdutoEdit();
    setProdutoState(INIT_PRODUTO);
    setTabPage(typesPages.pageHome);
  };

  const handleSave = () => {
    if (produtoState?.name && produtoState?.qt) {
      if (produtoEdit) {
        updateItemListaCompras({
          ...produtoEdit,
          ...produtoState,
          categoria: getInfoCategoria(produtoState.categoria),
        });
        setProdutoEdit();
        setProdutoState(INIT_PRODUTO);
        setTabPage(typesPages.pageHome);
        return;
      }
      addItemListaCompras({
        ...produtoState,
        categoria: getInfoCategoria(produtoState.categoria),
      });
      setTabPage(typesPages.pageHome);
    }
  };

  const onChangeItem = (name, value) => {
    setProdutoState((old) => ({ ...old, [name]: value }));
  };

  const renderCategorySelect = () => {
    const renderItem = ({ item }) => {
      const backgroundColor =
        item.id === produtoState.categoria ? "#0ef6cc" : "#fff";
      const color = item.id === produtoState.categoria ? "white" : "black";

      return (
        <TouchableOpacity
          onPress={() => onChangeItem("categoria", item.id)}
          style={{
            backgroundColor,
            borderWidth: 1,
            borderRadius: 10,
            marginHorizontal: 4,
          }}
        >
          <Image
            style={{ width: 100, height: 100, margin: 8 }}
            source={{ uri: getImageCategoria(item.name) }}
          />
          <Text textColor={color}>{item.name}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <SafeAreaView>
        <FlatList
          data={[
            defaultCategorias.find((item) => item.id === "gr"),
            ...defaultCategorias.filter((item) => item.id !== "gr"),
          ]}
          renderItem={(item) => renderItem(item)}
          horizontal
          numColumns={1}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={{ paddingTop: 16 }}>
      {renderCategorySelect()}
      <Text style={{ paddingLeft: 6, paddingTop: 12, color: "#fff" }}>
        Name
      </Text>
      <TextInput
        placeholder="Nome do produto"
        style={{
          margin: 6,
          borderWidth: 1,
          backgroundColor: "#fff",
          height: 35,
        }}
        value={produtoState.name}
        selectionColor="#fff"
        onChange={({ nativeEvent: { text } }) => onChangeItem("name", text)}
      />

      <Text style={{ paddingLeft: 6, color: "#fff" }}>Qt</Text>
      <TextInput
        placeholder="Nome do produto"
        style={{
          margin: 6,
          borderWidth: 1,
          backgroundColor: "#fff",
          height: 35,
        }}
        value={produtoState.qt.toString()}
        keyboardType="number-pad"
        selectionColor="red"
        onChange={({ nativeEvent: { text } }) =>
          onChangeItem("qt", Number(text))
        }
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingTop: 12,
        }}
      >
        <View style={{ width: 100, marginHorizontal: 6 }}>
          <Button title="Cancel" onPress={handleClose} color="#0ef6cc" />
        </View>
        <View style={{ width: 160, marginHorizontal: 6 }}>
          <Button
            title="Save"
            onPress={handleSave}
            style={{ paddingLeft: 8, width: 200 }}
            color="#0ef6cc"
          />
        </View>
      </View>
    </View>
  );
};

export default ContainerCadastroItem;
