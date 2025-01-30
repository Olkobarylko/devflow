"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.svg";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import classNames from "classnames";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { headerTheme } = useTheme();
  

  return (
    <header className={classNames(styles.header, {
      [styles.light]: headerTheme === "light",
        [styles.dark]: headerTheme === "dark",
    })}>
      <div className={styles.header__container}>
        <nav className={styles.header__nav}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles.header__logo} />
          </Link>
          <ul
            className={`${styles.header__items} ${
              menuOpen ? styles.active : ""
            }`}
          >
            <li className={styles.header__item}>
              <Link className={styles.header__link} href="/portfolio">
                Портфоліо
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link className={styles.header__link} href="/services">
                Сервіси
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link className={styles.header__link} href="/blog">
                Блог
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link className={styles.header__link} href="/">
                Контакти
              </Link>
            </li>
          </ul>
          <ul className={styles.header__btns}>
            <button className={styles.header__btn_lang}>EN</button>
            <Link href="/" className={styles.header__btn_yellow}>
              Задати запитання
            </Link>
            <button
              className={styles.header__ham_menu}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
