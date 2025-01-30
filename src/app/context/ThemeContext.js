"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [headerTheme, setHeaderTheme] = useState("dark");
  const [bannerTheme, setBannerTheme] = useState("dark");
  const [footerTheme, setFooterTheme] = useState("dark");

  const pathname = usePathname();

  useEffect(() => {
    // Умова для сторінки /blog (всі компоненти світлі)
    if (pathname === "/blog") {
      setHeaderTheme("light");
      setBannerTheme("light");
      setFooterTheme("light");
    }
    // Умова для сторінки /services (хедер темний, банер і футер світлі)
    else if (pathname === "/services") {
      setHeaderTheme("dark");
      setBannerTheme("light");
      setFooterTheme("light");
    }
    // Для інших сторінок (всі компоненти темні)
    else {
      setHeaderTheme("dark");
      setBannerTheme("dark");
      setFooterTheme("dark");
    }
  }, [pathname]);

  return (
    <ThemeContext.Provider value={{ headerTheme, bannerTheme, footerTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
