import { AppProps } from "next/app";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper-custom.css";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
