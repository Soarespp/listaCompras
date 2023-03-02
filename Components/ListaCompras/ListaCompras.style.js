import styled from "styled-components/native";
import { Text, HStack } from "react-native";

export const Campo = styled.View`
  width: ${(props) => (props.width ? props.width : 22)}%;
  margin: 0px 10px;
  padding: 3px;
  justifycontent: "center";
  alignitems: "center";
`;

export const CampoTitulo = styled.View`
  borderbottom: "1px solid #000";
  borderleft: "1px solid #000";
  alignitems: "center";
  margin: 0px 10px;
  width: ${(props) => (props.width ? props.width : 22)}%;
`;

export const CampoText = styled.Text`
  paddingleft: "3px";
`;

export const CampoTextTitulo = styled(Text)(() => ({
  backgroundColor: (props) => props.backgroundColor || "#fff",
  width: (props) => props.width || "10%",
  borderBottom: "1px solid #000",
}));
