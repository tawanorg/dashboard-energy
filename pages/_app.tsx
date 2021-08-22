import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { DesignProvider } from '@govhack/design';
import { AppContext } from '@govhack/context';

function MyApp({ Component, pageProps }: AppProps) {
  const [token, setToken] = React.useState(103);

  return (
    <AppContext.Provider value={{ token: token, setToken }}>
      <DesignProvider>
        <Component {...pageProps} />
      </DesignProvider>
    </AppContext.Provider>
  );
}
export default MyApp;
