import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      "gray-50": "#F5F8FA",
      "gray-300": "#DADADA",
      "gray-400": "#999999",
      "gray-900": "#47585B",
      "yellow-550": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "brand.gray-50",
        color: "brand.gray-900",
      },
    },
  },
  sizes: {
    xs: "20rem",
  },
});
