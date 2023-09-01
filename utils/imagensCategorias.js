import { Image } from "react-native";
import bebidas from "../imgs/bebidas.png";
import carnes from "../imgs/carnes.png";
import frios from "../imgs/frios.png";
import frutas from "../imgs/frutas.png";
import generico from "../imgs/generico.png";
import higiene from "../imgs/higiene.png";
import limpeza from "../imgs/limpeza.png";
import manutencao from "../imgs/manutencao.png";
import verduras from "../imgs/verduras.png";
import { defaultCategorias } from "./constantes";

const DEFAULT_BEBIDAS = Image.resolveAssetSource(bebidas).uri;
const DEFAULT_CARNES = Image.resolveAssetSource(carnes).uri;
const DEFAULT_FRIOS = Image.resolveAssetSource(frios).uri;
const DEFAULT_FRUTAS = Image.resolveAssetSource(frutas).uri;
const DEFAULT_GENERICO = Image.resolveAssetSource(generico).uri;
const DEFAULT_HIGIENE = Image.resolveAssetSource(higiene).uri;
const DEFAULT_LIMPEZA = Image.resolveAssetSource(limpeza).uri;
const DEFAULT_MANUTENCAO = Image.resolveAssetSource(manutencao).uri;
const DEFAULT_VERDURAS = Image.resolveAssetSource(verduras).uri;

export const getInfoCategoria = (id = "gr") => {
  return defaultCategorias.find((item) => item.id === id)?.name || "Genérico";
};

export const getIdCategoria = (name = "Genérico") => {
  return defaultCategorias.find((item) => item.name === name)?.id || "gr";
};

export const getImageCategoria = (type) => {
  if (type === "Bebidas") {
    return DEFAULT_BEBIDAS;
  }

  if (type === "Carnes") {
    return DEFAULT_CARNES;
  }

  if (type === "Frios") {
    return DEFAULT_FRIOS;
  }
  if (type === "Frutas") {
    return DEFAULT_FRUTAS;
  }
  if (type === "Higiene") {
    return DEFAULT_HIGIENE;
  }
  if (type === "Limpeza") {
    return DEFAULT_LIMPEZA;
  }
  if (type === "Verduras") {
    return DEFAULT_VERDURAS;
  }

  if (type === "Manutenção") {
    return DEFAULT_MANUTENCAO;
  }

  return DEFAULT_GENERICO;
};
