import styled from "styled-components/native";
import { Pressable, View } from "react-native";

export const Card = styled(Pressable)(() => ({
  width: "50%",
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
