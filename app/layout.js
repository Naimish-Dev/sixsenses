import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import Conact from "./components/Conact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Six Senses Residences",
  description: "six senses residences dubai marina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.ico" />
      <Conact />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
