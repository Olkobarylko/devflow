import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
