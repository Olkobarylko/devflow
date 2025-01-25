import styles from "./Card.module.scss";
import Link from "next/link";

export default function Card({ title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__heading}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{text}</p>
      </div>
      <div className={styles.card__btns}>
        <Link href="/" className={styles.card__btn_yellow}>
          Замовити
        </Link>
        <Link href="/" className={styles.card__btn_white}>
          Детальніше
        </Link>
      </div>
    </div>
  );
}
