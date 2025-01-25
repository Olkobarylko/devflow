import styles from "./WorkCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

export default function WorkCard({ title, subtitle, img, reverse }) {
  return (
    <Link
      href="/"
      className={classNames(styles.work_card, {
        [styles.reverse]: reverse,
      })}
    >
      <div className={styles.work_card__text_container}>
        <h3 className={styles.work_card__title}>{title}</h3>
        <p className={styles.work_card__subtitle}>{subtitle}</p>
        <button className={styles.work_card__btn}>Переглянути проєкт</button>
      </div>
      <div className={styles.work_card__img_container}>
        <Image className={styles.work_card__img} src={img} alt="" />
      </div>
    </Link>
  );
}
