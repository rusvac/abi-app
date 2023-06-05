import { ChakraProvider } from "@chakra-ui/react";

import { Analytics } from "@vercel/analytics/react";

import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

import theme from "../theme";
import { AppProps } from "next/app";
import GlobalStyle from "../styling";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
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
