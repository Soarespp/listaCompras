export const typesTab = {
  tabLista: "lista",
  tabCarrinho: "carrinho",
};

export const typesPages = {
  pageLista: "lista",
  pageHistorico: "historico",
  pageImports: "importacao",
  pageHome: "home",
  pagePagamento: "pagamento",
  pageInformacoes: "informacoes",
};

export const typesCategoriasProduto = [
  { id: "f", title: "Frios", color: "#fff" },
  { id: "v", title: "Verduras", color: "#fff" },
  { id: "l", title: "Limpeza", color: "#fff" },
  { id: "u", title: "Utensílios", color: "#fff" },
  { id: "m", title: "Mantimentos", color: "#fff" },
  { id: "b", title: "bebida", color: "#fff" },
  { id: "o", title: "outros", color: "#fff" },
];

export const defaultValues = {
  id: 0,
  name: "",
  comprado: false,
  falta: false,
  qt: 0,
};

export const defaultListaCompra = {
  dataLista: new Date(),
  user: "Pedro Soares",
  finalizada: false,
  itens: [],
};

export const defaultListaCompras = [];
