import styled from "styled-components/native";
import { TouchableHighlight, View } from "react-native";

export const TabItem = styled(TouchableHighlight)(
  ({ tabSelected, tabTitle }) => {
    return {
      width: "50%",
      justifycontent: "center",
      alignitems: "center",
      textAlign: "center",
      backgroundColor: tabSelected === tabTitle ? "#cad4d9" : "white",
    };
  }
);

export const MenuItem = styled(View)(({ tabSelected, tabTitle }) => {
  return {
    backgroundColor: tabSelected === tabTitle ? "#cad4d9" : "white",
  };
});
