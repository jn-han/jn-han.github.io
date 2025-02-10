import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

export const metadata = {
  title: "Joshua Nguyen's Website",
  description: "Explore my projects and blog posts.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans font-light scroll-smooth`}
    >
      <Head>
        <meta property="og:title" content="Joshua Nguyen's Website" />
        <meta
          property="og:description"
          content="Explore my projects and blog posts."
        />
        <meta property="og:url" content="https://joshuanguyen.ca/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://joshuanguyen.ca/web_preview.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
