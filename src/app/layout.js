"use client";
import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Banner />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
