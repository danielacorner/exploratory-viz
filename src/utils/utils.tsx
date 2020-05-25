export const titleCase = (text: string) =>
  text
    .split(" ")
    .map((word) => word && `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");

export const isEqual = (item1, item2) =>
  JSON.stringify(item1) === JSON.stringify(item2);
