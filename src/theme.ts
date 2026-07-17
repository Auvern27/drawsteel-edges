import { createTheme, type MantineColorsTuple } from "@mantine/core";

const ember: MantineColorsTuple = [
  "#fff1e8",
  "#ffddc9",
  "#ffb98e",
  "#ff934f",
  "#fd741d",
  "#e2531e",
  "#c2430f",
  "#9c3509",
  "#7a2a08",
  "#5c1f07",
];

const steel: MantineColorsTuple = [
  "#eef0f2",
  "#dadde1",
  "#b7bcc3",
  "#93999f",
  "#6f767d",
  "#4e545b",
  "#383c42",
  "#26292e",
  "#1a1c1f",
  "#101113",
];

export const theme = createTheme({
  primaryColor: "ember",
  colors: { ember, steel },
  fontFamily: '"Inter", sans-serif',
  fontFamilyMonospace: '"JetBrains Mono", monospace',
  headings: {
    fontFamily: '"Oswald", sans-serif',
    fontWeight: "600",
  },
  defaultRadius: 0,
  black: "#101113",
  white: "#f4f5f6",
});
