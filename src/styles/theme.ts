import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      "gray-50": "#F5F8FA",
      "gray-900": "#47585B",
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
});
