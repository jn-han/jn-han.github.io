import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Joshua Nguyen's Website",
  description: "",
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
      <link rel="icon" href="/favicon/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
