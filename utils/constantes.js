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
  pageCadastroProduto: "carProduto",
};

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

export const defaultCategorias = [
  { name: "Frios", id: "fr" },
  { name: "Bebidas", id: "b" },
  { name: "Carnes", id: "c" },
  { name: "Frutas", id: "f" },
  { name: "Verduras", id: "v" },
  { name: "Limpeza", id: "l" },
  { name: "Higiene", id: "h" },
  { name: "Manutenção", id: "m" },
  { name: "Genérico", id: "gr" },
];
