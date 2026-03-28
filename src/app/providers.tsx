'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import GlobalStyle from '../styling';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GlobalStyle>
        {children}
      </GlobalStyle>
    </ChakraProvider>
  );
}
