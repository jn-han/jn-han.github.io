import type { AppProps } from "next/app";
import Head from "next/head";
import { Manrope } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";

config.autoAddCss = false;

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Joshua Nguyen&apos;s Website</title>
        <meta
          name="description"
          content="Software developer portfolio for Joshua Nguyen"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main className={`${manrope.variable} font-sans antialiased`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
