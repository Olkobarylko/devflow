import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo-footer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footer__cols}>
        <li className={styles.footer__col}>
          <ul className={styles.footer__items}>
            <li>
              <Image className={styles.footer__logo} src={logo} alt="logo" />
            </li>
            <li>
              <p className={styles.footer__text}>
                Abra agency - досвідчені спеціалісти з понад 10-ти річним стажем
                в сфері дизайну та розробки, об'єднані бажанням творити для Вас
                персональний впізнаваний стиль та запускати веб-додатки, щоб Ваш
                бізнес зачаровував клієнтів.
              </p>
            </li>
          </ul>
        </li>
        <li className={styles.footer__col}>
          <Link href="/" className={styles.footer__col_title}>
            Abra Agency
          </Link>
          <ul className={styles.footer__items}>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Наші контакти
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Сервіси
              </Link>
            </li>{" "}
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Портфоліо
              </Link>
            </li>{" "}
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Блог
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.footer__col}>
          <Link href="/" className={styles.footer__col_title}>
            Наші послуги
          </Link>
          <ul className={styles.footer__items}>
            <li className={styles.footer__item}>
              <Link href="/"  className={styles.footer__link}>
                Розробка веб-сайтів
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Розробка брендбуку
              </Link>
            </li>{" "}
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Створення логотипу
              </Link>
            </li>{" "}
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Copywriting
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.footer__col}>
          <p className={styles.footer__col_title}>
          Social Links
          </p>
          <ul className={styles.footer__items}>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
              <FontAwesomeIcon className={styles.footer__icon} icon={faLinkedin} />
                Розробка веб-сайтів
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
              <FontAwesomeIcon className={styles.footer__icon} icon={faFacebook} />
                Facebook
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
              <FontAwesomeIcon className={styles.footer__icon} icon={faInstagram} />
                Instagram
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
              <FontAwesomeIcon className={styles.footer__icon} icon={faBehance} />
                Behance
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <p className={styles.footer__author}>
        <abbr title="Copyright">©</abbr>
        2019-2025 Abra Agency. Всі права застережено!
      </p>
    </div>
  );
}
