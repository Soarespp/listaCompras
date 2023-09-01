import { IconButton } from "@react-native-material/core";
import { TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SearchItem = ({ filter, setFilter }) => {
  return (
    <View style={{ display: "flex" }}>
      <TextInput
        style={{
          backgroundColor: "#fff",
          fontSize: 16,
          margin: 12,
          borderRadius: 6,
          height: 28,
        }}
        placeholder="Digite o produto"
        placeholderTextColor="#000"
        onC
        value={filter}
        onChange={({ nativeEvent: { text } }) => setFilter(text)}
      />
      {filter && (
        <IconButton
          style={{
            position: "absolute",
            borderRadius: 12,
            right: 6,
            top: 6,
            width: 30,
            height: 30,
          }}
          icon={(props) => <Icon name="close" {...props} />}
          onPress={() => setFilter(undefined)}
        />
      )}
    </View>
  );
};

export default SearchItem;
