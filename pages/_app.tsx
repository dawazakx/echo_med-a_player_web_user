import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "@/redux/provider";
import { Inter } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Layout from "@/components/dashboard/dashboard-layout/Layout";

export const inter = Inter({ subsets: ["latin"] });
export const nunito = Inter({ subsets: ["latin"], variable: "--font-nunito" });
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StoreProvider>
      <>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      </>
    </StoreProvider>
  );
}
