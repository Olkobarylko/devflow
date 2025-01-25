"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.svg";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const body = document.body;
  //   if (menuOpen) {
  //     body.classList.add('menu-open');
  //     console.log(body.classList);

  //   } else {
  //     body.classList.remove('menu-open');
  //   }

  //   return () => {
  //     body.classList.remove('menu-open');
  //   };
  // }, [menuOpen]);

  return (
    <div className={styles.header__container}>
      <nav className={styles.header__nav}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles.header__logo} />
        </Link>
        <ul
          className={`${styles.header__items} ${menuOpen ? styles.active : ""}`}
        >
          <li className={styles.header__item}>
            <Link className={styles.header__link} href="/portfolio">
              Портфоліо
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link className={styles.header__link} href="/">
              Сервіси
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link className={styles.header__link} href="/">
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
  );
}
