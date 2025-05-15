import { DarkModeProvider } from "../../contexts/DarkModeContexts";
import { GradientProvider } from "../../contexts/GradientContexts";
import "./globals.css";
import { Nunito } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

export const metadata = {
  title: "Joshua Nguyen's Website",
  description: "",
};
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.className} scroll-smooth`}>
      <link rel="icon" href="/favicon/favicon.ico" />

      <body>
        <DarkModeProvider>
          <GradientProvider>{children}</GradientProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
