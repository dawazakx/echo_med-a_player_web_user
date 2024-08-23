import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "@/redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <>
        <Component {...pageProps} />
        <ToastContainer />
      </>
    </StoreProvider>
  );
}
