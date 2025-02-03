"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import safe from "../../../public/images/article-safe.png";
import python from "../../../public/images/article-python.png";
import vector from "../../../public/images/article-vector.svg";
import ArticleCard from "../components/ArticleCard/ArticleCard";

export default function Blog() {
  return (
    <section className={styles.list_articles}>
      <div className={styles.list_articles__container}>
        <h2 className={styles.list_articles__title}>Блог</h2>
        <p className={styles.list_articles__subtitle}>
          Ласкаво просимо до захоплюючого світу Abra agency! З нашого блогу ви
          дізнаєтеся про передові технології, стратегії бренду та актуальні
          питання безпеки. Долучайтеся до спільноти та зростайте разом із нами у
          цьому захоплюючому цифровому світі!
        </p>
        <ul className={styles.list_articles__items}>
          <li>
            <ArticleCard
              title="Чому веб-безпека є ключем до вашої онлайн-стійкості?"
              content="Від моменту появи Інтернету та веб-технологій наш світ
                  незворотньо змінився. Ми звикли ділитися інформацією,
                  комунікувати, працювати та здійснювати покупки онлайн. Однак
                  разом з безліччю переваг сучасний веб приніс і нові загрози.
                  Проте знаючи про ризики, ми можемо перетворити цей віртуальний
                  світ на безпечний простір для кожного."
              img={safe}
            />
          </li>
          <li>
            <ArticleCard
              title="Чому веб-безпека є ключем до вашої онлайн-стійкості?"
              content="Від моменту появи Інтернету та веб-технологій наш світ
                  незворотньо змінився. Ми звикли ділитися інформацією,
                  комунікувати, працювати та здійснювати покупки онлайн. Однак
                  разом з безліччю переваг сучасний веб приніс і нові загрози.
                  Проте знаючи про ризики, ми можемо перетворити цей віртуальний
                  світ на безпечний простір для кожного."
              img={python}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
