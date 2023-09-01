import styled from "styled-components/native";
import { Pressable, Text, View } from "react-native";

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
  backgroundColor: (props) => props.backgroundColor || "#365A08",
  width: (props) => props.width || "10%",
  borderBottom: "1px solid #000",
}));

export const Card = styled(Pressable)(() => ({
  width: "50%",
  backgroundColor: "#262933",
}));

export const CardBody = styled(View)(({ comprado, falta }) => {
  const colorBack = comprado ? "#72eb3a" : falta ? "#f65151" : "#0ef6cc";

  return {
    borderWidth: 1,
    position: "relative",
    borderRadius: 20,
    marginTop: 60,
    marginHorizontal: 6,
    backgroundColor: colorBack,
  };
});
