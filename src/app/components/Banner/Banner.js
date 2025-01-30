"use client";
import styles from "./Banner.module.scss";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import classNames from "classnames";

export default function Banner() {
  const { bannerTheme } = useTheme();
  // console.log(bannerTheme);

  return (
    <div
      className={classNames(styles.banner, {
        [styles.light]: bannerTheme === "light",
        [styles.dark]: bannerTheme === "dark",
      })}
    >
      <Link href="/" className={styles.banner__title}>
        Давайте поспілкуємось?
      </Link>
      <div className={styles.banner__contacts}>
        <Link href="/" className={styles.banner__contact}>
          +38 063 832 68 42
        </Link>
        <Link href="/" className={styles.banner__contact}>
          abra.agency@gmail.com
        </Link>
      </div>
    </div>
  );
}
