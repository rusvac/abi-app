import { ChakraProvider } from "@chakra-ui/react";

import { Analytics } from "@vercel/analytics/react";

import theme from "../theme";
import { AppProps } from "next/app";
import GlobalStyle from "../styling";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default App;
