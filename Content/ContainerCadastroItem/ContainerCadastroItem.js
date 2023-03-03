import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { Button, SectionList, Text, TextInput, View } from "react-native";
import { useListaComprasContext } from "../../Components/Context";
import { typesCategoriasProduto } from "../../utils/constantes";

const ContainerCadastroItem = () => {
  const { changeCadOpen, addItemListaCompras } = useListaComprasContext();
  const [categoria, setCategoria] = useState("o");
  const { control, handleSubmit, reset } = useForm({
    defaultValue: { name: "", qt: 0 },
  });

  const handleSave = (data) => {
    if (data?.name && data?.qt) {
      addItemListaCompras({ ...data, categoria });
      reset();
      changeCadOpen();
    }
  };

  const handleCancel = () => {
    reset();
    changeCadOpen();
  };

  const InputInterno = ({ name }) => {
    const { field } = useController({
      control,
      defaultValue: "",
      name,
    });
    return (
      <TextInput
        style={{ margin: 6, borderWidth: 1 }}
        value={field.value}
        onChangeText={field.onChange}
        keyboardType={name === "qt" ? "numeric" : "text"}
      />
    );
  };

  const DATA = [
    {
      title: "Categoria dos produtos",
      data: typesCategoriasProduto,
    },
  ];

  return (
    <View>
      <Text style={{ paddingLeft: 6 }}>Name</Text>
      <InputInterno name="name" />
      <Text style={{ paddingLeft: 6 }}>Qt</Text>
      <InputInterno name="qt" />
      <View style={{ height: 100, marginTop: 10 }}>
        <Text style={{ paddingLeft: 6 }}>Categoria:</Text>
        <SectionList
          style={{ height: 100, backgroundColor: "#e2e2e2", marginTop: 10 }}
          sections={DATA}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: item.id === categoria ? "#009093" : "#fff",
                opacity: item.id === categoria ? 0.6 : 1,
                margin: 1,
              }}
            >
              <Text
                onPress={() => setCategoria(item.id)}
                style={{ fontSize: 16, paddingLeft: 6 }}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          title="Save"
          onPress={handleSubmit(handleSave)}
          style={{ paddingLeft: 8 }}
          color="#009093"
        />
        <Button title="Cancel" onPress={handleCancel} color="#009093" />
      </View>
    </View>
  );
};

export default ContainerCadastroItem;
