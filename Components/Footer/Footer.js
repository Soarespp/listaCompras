import { View, StyleSheet, Pressable, Image } from "react-native";
import { typesPages, typesTab } from "../../utils/constantes";
import { useState } from "react";
import DefaultImage from "../../imgs/lista.png";
import CarShop from "../../imgs/carShop.png";
import Payment from "../../imgs/payment.png";
import Info from "../../imgs/info.png";

const DEFAULT_LISTA = Image.resolveAssetSource(DefaultImage).uri;
const DEFAULT_CARSHOP = Image.resolveAssetSource(CarShop).uri;
const DEFAULT_PAYMENT = Image.resolveAssetSource(Payment).uri;
const DEFAULT_INFO = Image.resolveAssetSource(Info).uri;

const Footer = ({ onChangePage, onChangeTab }) => {
  const [menuSelect, setMenuSelect] = useState("list");
  const renderImage = ({ src, textEvent, event }) => {
    return (
      <Pressable
        style={
          menuSelect === textEvent ? styles.menuItemSelect : styles.menuItem
        }
        onPress={() => {
          setMenuSelect(textEvent);
          event?.();
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: src }}
        />
      </Pressable>
    );
  };

  return (
    <View
      style={{
        display: "flex",
      }}
    >
      <View
        style={{
          width: "100%",
          border: "1 solid #000",
          height: 50,
          zIndex: 3,
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        {renderImage({
          src: DEFAULT_LISTA,
          textEvent: "list",
          event: () => {
            onChangePage(typesPages.pageHome);
            onChangeTab(typesTab.tabLista);
          },
        })}
        {renderImage({
          src: DEFAULT_CARSHOP,
          textEvent: "car",
          event: () => {
            onChangePage(typesPages.pageHome);
            onChangeTab(typesTab.tabCarrinho);
          },
        })}
        {renderImage({
          src: DEFAULT_PAYMENT,
          textEvent: "pay",
          event: () => onChangePage(typesPages.pageHistorico),
        })}
        {renderImage({
          src: DEFAULT_INFO,
          textEvent: "info",
          event: () => onChangePage(typesPages.pageInformacoes),
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    overflow: "hidden",
    alignItems: "flex-end",
    zIndex: -9999,
    paddingBottom: 12,
  },
  menuItem: {
    height: 40,
    width: 40,
    margin: 6,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  menuItemSelect: {
    position: "relative",
    height: 50,
    width: 50,
    padding: 6,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Footer;
