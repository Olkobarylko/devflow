import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>Ми — Abra<br />
        Креативна веб-агенція</h1>
        <p className={styles.hero__subtitle}>Ми команда творчих дизайнерів та розробників, які перетворюють ідеї на захоплюючі візуальні рішення. Маємо експертизу у розробці веб-сайтів з високою оптимізацією для пошукових систем (SEO).</p>
        <p className={styles.hero__subtitle}>Нашою метою є надання високоякісного та інноваційного дизайну, який підвищує видимість вашого бізнесу в онлайн-середовищі.</p>
        <div className={styles.hero__btns}>
          <Link href='/' className={styles.hero__btn_white}>Наші проєкти <FontAwesomeIcon className={styles.hero__btn_icon} icon={faArrowRight} /></Link>
          <Link href='/' className={styles.hero__btn_yellow}>Безкоштовна консультація<FontAwesomeIcon className={styles.hero__btn_icon} icon={faArrowRight} /></Link>
        </div>
      </section>
      <section className={styles.list}>
        <h2 className={styles.list__title}>Наша агенція пропонує повний спектр послуг, оптимізованих для максимальної ефективності та задоволення потреб клієнтів.</h2>
        <p className={styles.list__subtitle}>Зосередьтеся на тому, що ви робите найкраще, а решту завдань з<br />оцифрування бізнесу довірте <Link className={styles.list__subtitle_link} href='/'>Abra Agency</Link> !</p>
        <ul className={styles.list__items}>
          <li>
            <h3 className={styles.list__col_title}>Веб сайти</h3>
            <ul className={styles.list__col}>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Аналіз/Аудит</Link>
              </li>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                UI/UX</Link>
              </li>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Редизайн</Link>
              </li>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Корпоративний веб-сайт</Link>
              </li>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Інтернет-магазин</Link>
              </li>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Лендінг сторінка</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={styles.list__col_title}>Брендинг</h3>
            <ul className={styles.list__col}>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Лого</Link>
              </li>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Брендбук</Link>
              </li>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Копірайтинг</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={styles.list__col_title}>Техпідтримка</h3>
            <ul className={styles.list__col}>
              <li>
                <Link href='/' className={styles.list__col_item}>
                <span className={styles.list__decor}></span>
                Підтримка сайту</Link>
              </li>
              
            </ul>
          </li>
        </ul>
        <Link href='/' className={styles.list__btn}>Переглянути всі послуги <FontAwesomeIcon className={styles.hero__btn_icon} icon={faArrowRight} /></Link>

      </section>
    </div>
  );
}
