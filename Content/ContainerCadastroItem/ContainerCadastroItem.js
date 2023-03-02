import { useController, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { useListaComprasContext } from "../../Components/Context";

const ContainerCadastroItem = () => {
  const { changeCadOpen, addItemListaCompras } = useListaComprasContext();
  const { control, handleSubmit, reset } = useForm({
    defaultValue: { name: "", qt: 0 },
  });

  const handleSave = (data) => {
    if (data?.name && data?.qt) {
      addItemListaCompras(data);
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

  return (
    <View>
      <Text style={{ paddingLeft: 6 }}>Name</Text>
      <InputInterno name="name" />
      <Text style={{ paddingLeft: 6 }}>Qt</Text>
      <InputInterno name="qt" />
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
