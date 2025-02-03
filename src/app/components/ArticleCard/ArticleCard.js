'use client'
import styles from "./ArticleCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import vector from "../../../../public/images/article-vector.svg";
export default function ArticleCard({title, img, content}) {
  return (
    <Link href="/" className={styles.article_card}>
      <div className={styles.article_card__img_container}>
        <Image src={img} className={styles.article_card__img} alt="" />
        <Image
          src={vector}
          className={styles.article_card__vector}
          alt=""
        />
      </div>
      <div className={styles.article_card__text_container}>
        <h3 className={styles.article_card__title}>
          {title}
        </h3>
        <p className={styles.article_card__content}>
          {content}
        </p>
        <Link href="/" className={styles.article_card__btn}>
          Детальніше
        </Link>
      </div>
    </Link>
  );
}
