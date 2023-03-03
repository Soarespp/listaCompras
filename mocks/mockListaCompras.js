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
      { id: 1, name: "Café 1", comprado: false, falta: false, qt: 1 },
      { id: 2, name: "Café 2", comprado: false, falta: false, qt: 11 },
      { id: 3, name: "Café 3", comprado: false, falta: true, qt: 11 },
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
