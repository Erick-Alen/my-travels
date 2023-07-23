// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate NextJS With Styled Component</title>
        {/* <link rel="shortcut icon" href="" /> */}
        <meta
          name="description"
          content="A boilerplate using Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
