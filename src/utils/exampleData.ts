const exampleDatum = {
  name: "Item A",
  elephants: 30,
  species: "cool",
  isDog: false,
};

export const exampleData1 = [
  exampleDatum,
  {
    ...exampleDatum,
    name: "Item B",
    isDog: true,
  },
  { ...exampleDatum, name: "Item C", elephants: 50 },
  { ...exampleDatum, name: "Item D", elephants: 60 },
  { ...exampleDatum, name: "Item E", elephants: 70 },
  { ...exampleDatum, name: "Item F", elephants: 70, species: "cat" },
];

export const exampleData2 = [
  { ...exampleDatum, name: "Item G", elephants: 100 },
  { ...exampleDatum, name: "Item H", elephants: 10 },
  { ...exampleDatum, name: "Item I", elephants: 80 },
  { ...exampleDatum, name: "Item J", elephants: 20 },
  { ...exampleDatum, name: "Item K", elephants: 400, species: "cat" },
];
