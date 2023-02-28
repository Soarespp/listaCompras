import styled from "styled-components/native";
import { Text } from "react-native";

export const Campo = styled.View`
  width: ${(props) => (props.width ? props.width : 22)}%;
  margin: 0px 10px;
`;

export const CampoTitulo = styled.View`
  borderbottom: "1px solid #000";
  borderleft: "1px solid #000";
  // justifycontent: "center";
  alignitems: "center";
  margin: 0px 10px;
  width: ${(props) => (props.width ? props.width : 22)}%;
`;

// display: "flex",
// paddingLeft: "5px",
// justifyContent: (props) => props.justiFyContent || "center",
// backgroundColor: (props) => props.backgroundColor || "white",

// width: ${(props) => String(props.width) || 75};
// borderBottom: "1px solid #000",
// borderLeftWidth: "1px solid #000",
// borderBottomWidth: 1,
// justifyContent: "center",
// alignItems: "center",
// marginTop: 6,
// backgroundColor: (props) => props.backgroundColor || "white",
// width: (props) => props.width || "20%",
// });

// export const CampoTitulo1 = styled(View)({
//   display: "flex",
//   borderBottom: "1px solid #000",
//   borderLeft: "1px solid #000",
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: "6px",
//   backgroundColor: (props) => props.backgroundColor || "white",
//   width: (props) => props.width || "10%",
// });

export const CampoText = styled.Text`
  paddingleft: "3px";
`;

export const CampoTextTitulo = styled(Text)(() => ({
  backgroundColor: (props) => props.backgroundColor || "#fff",
  width: (props) => props.width || "10%",
  borderBottom: "1px solid #000",
}));
