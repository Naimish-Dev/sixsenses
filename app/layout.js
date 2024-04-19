import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import Conact from "./components/Conact";
import GoogleTagManager from "./components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Six Senses Residences",
  description: "six senses residences dubai marina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16536479128"
        ></script>
        <GoogleTagManager />
      </head>
      <Conact />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
