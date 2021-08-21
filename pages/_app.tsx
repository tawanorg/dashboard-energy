import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DesignProvider } from "@govhack/design";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DesignProvider>
      <Component {...pageProps} />
    </DesignProvider>
  );
}
export default MyApp;
