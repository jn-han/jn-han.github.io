import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Joshua Nguyen's Website",
  description: "Explore my projects and blog posts.",
  openGraph: {
    title: "Joshua Nguyen's Website",
    description: "Explore my projects and blog posts.",
    url: "https://joshuanguyen.ca/",
    images: [
      {
        url: "https://joshuanguyen.ca/web_preview.png",
        width: 1200,
        height: 630,
        alt: "Joshua Nguyen's Website Preview",
      },
    ],
    type: "website",
  },
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
