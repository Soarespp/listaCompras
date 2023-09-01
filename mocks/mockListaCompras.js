export const mockListaCompras = [
  {
    dataLista: new Date(),
    user: "Pedro Soares",
    finalizada: true,
    itens: [
      { id: 1, name: "Café 1", comprado: false, falta: false, qt: 1 },
      { id: 2, name: "Café 2", comprado: false, falta: false, qt: 11 },
    ],
  },
  {
    dataLista: new Date("2020-02-24"),
    user: "Pedro Soares",
    finalizada: false,
    itens: [
      {
        id: 1,
        name: "Teste nome grande de item",
        comprado: false,
        falta: false,
        qt: 1,
        categoria: "Bebidas",
      },
      {
        id: 2,
        name: "Bife",
        comprado: false,
        falta: false,
        qt: 11,
        categoria: "Frutas",
      },
      // {
      //   id: 3,
      //   name: "Cola",
      //   comprado: false,
      //   falta: false,
      //   qt: 11,
      //   categoria: "Genérico",
      // },
      // {
      //   id: 4,
      //   name: "Whisky",
      //   comprado: false,
      //   falta: false,
      //   qt: 1,
      //   categoria: "Bebidas",
      // },
      // {
      //   id: 5,
      //   name: "Arroz",
      //   comprado: false,
      //   falta: false,
      //   qt: 1,
      //   categoria: "Bebidas",
      // },
      // {
      //   id: 6,
      //   name: "Feijão",
      //   comprado: false,
      //   falta: false,
      //   qt: 11,
      //   categoria: "Frutas",
      // },
      // {
      //   id: 7,
      //   name: "Açucar",
      //   comprado: false,
      //   falta: false,
      //   qt: 11,
      //   categoria: "Genérico",
      // },
      // {
      //   id: 8,
      //   name: "presunto",
      //   comprado: false,
      //   falta: false,
      //   qt: 1,
      //   categoria: "Bebidas",
      // },
    ],
  },
];

const teste = [
  {
    dataLista: "2023-03-02T20:48:58.972Z",
    finalizada: false,
    itens: [[Object]],
    user: "Pedro Soares",
  },
][{ comprado: false, falta: false, id: 0, name: "prmeiro 1", qt: "1" }];
