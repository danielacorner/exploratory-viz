export const titleCase = (text: string) =>
  text
    .split(" ")
    .map((word) => word && `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
