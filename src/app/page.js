"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ucu from "../../public/images/ucu.svg";
import local from "../../public/images/local.svg";
import karpaty from "../../public/images/fckarpaty.svg";
import brand from "../../public/images/brand.svg";
import war from "../../public/images/360war.svg";
import classNames from "classnames";
import WorkCard from "./components/WorkCard/WorkCard";
import boichuk from "../../public/images/boichuk.png";
import fckarpaty from "../../public/images/karpaty.png";
import local_img from "../../public/images/local-img.png";
import React, { useEffect } from "react";

export default function Home() {

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>
          Ми — Abra
          <br />
          Креативна веб-агенція
        </h1>
        <p className={styles.hero__subtitle}>
          Ми команда творчих дизайнерів та розробників, які перетворюють ідеї на
          захоплюючі візуальні рішення. Маємо експертизу у розробці веб-сайтів з
          високою оптимізацією для пошукових систем (SEO).
        </p>
        <p className={styles.hero__subtitle}>
          Нашою метою є надання високоякісного та інноваційного дизайну, який
          підвищує видимість вашого бізнесу в онлайн-середовищі.
        </p>
        <div className={styles.hero__btns}>
          <Link href="/" className={styles.hero__btn_white}>
            Наші проєкти{" "}
            <FontAwesomeIcon
              className={styles.hero__btn_icon}
              icon={faArrowRight}
            />
          </Link>
          <Link href="/" className={styles.hero__btn_yellow}>
            Безкоштовна консультація
            <FontAwesomeIcon
              className={styles.hero__btn_icon}
              icon={faArrowRight}
            />
          </Link>
        </div>
      </section>
      <section className={styles.list}>
        <h2 className={styles.list__title}>
          Наша агенція пропонує повний спектр послуг, оптимізованих для
          максимальної ефективності та задоволення потреб клієнтів.
        </h2>
        <p className={styles.list__subtitle}>
          Зосередьтеся на тому, що ви робите найкраще, а решту завдань з<br />
          оцифрування бізнесу довірте{" "}
          <Link className={styles.list__subtitle_link} href="/">
            Abra Agency
          </Link>{" "}
          !
        </p>
        <ul className={styles.list__items}>
          <li>
            <h3 className={styles.list__col_title}>Веб сайти</h3>
            <ul className={styles.list__col}>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Аналіз/Аудит
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  UI/UX
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Редизайн
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Корпоративний веб-сайт
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Інтернет-магазин
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Лендінг сторінка
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={styles.list__col_title}>Брендинг</h3>
            <ul className={styles.list__col}>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Лого
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Брендбук
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Копірайтинг
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={styles.list__col_title}>Техпідтримка</h3>
            <ul className={styles.list__col}>
              <li>
                <Link href="/" className={styles.list__col_item}>
                  <span className={styles.list__decor}></span>
                  Підтримка сайту
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <Link href="/" className={styles.list__btn}>
          Переглянути всі послуги
          <FontAwesomeIcon
            className={styles.hero__btn_icon}
            icon={faArrowRight}
          />
        </Link>
      </section>
      <section className={styles.list_images}>
        <h2 className={styles.list_images__title}>Нам довіряють</h2>
        <p className={styles.list_images__subtitle}>
          Наші клієнти - бізнеси та організації різних галузей і країн. Ось
          кілька захоплюючих брендів та партнерів, з якими ми маємо честь
          співпрацювати
        </p>
        <ul className={styles.list_images__icons}>
          <li>
            <Image
              className={classNames(styles.list_images__icon, styles.ucu)}
              src={ucu}
              alt="icon"
            />
          </li>
          <li>
            <Image
              className={styles.list_images__icon}
              src={local}
              alt="icon"
            />
          </li>
          <li>
            <Image
              className={styles.list_images__icon}
              src={karpaty}
              alt="icon"
            />
          </li>
          <li>
            <Image
              className={styles.list_images__icon}
              src={brand}
              alt="icon"
            />
          </li>
          <li>
            <Image className={styles.list_images__icon} src={war} alt="icon" />
          </li>
        </ul>
      </section>
      <section className={styles.showcase}>
        <h2 className={styles.showcase__title}>Наші роботи</h2>
        <p className={styles.showcase__subtitle}>
          Кожен проект відображає нашу професійність, творчий підхід та
          прагнення до найкращих результатів. Ознайомтеся з нашим портфоліо, щоб
          отримати візуальне враження від нашої роботи та можливостей.
        </p>
        <div className={styles.showcase__cards}>
          <WorkCard
            title={`Мультимедійна онлайн-платформа "Локальна історія"`}
            subtitle={`Розробка та редизайн сайту`}
            img={local_img}
            reverse={false}
          />
          <WorkCard
            title={`Бренд одягу "Boichuk"`}
            subtitle={`Розробка стилю та веб-сайту для бренду Boichuk`}
            img={boichuk}
            reverse={true}
          />
          <WorkCard
            title={`Футбольний клуб "Карпати Львів"`}
            subtitle={`Розробка сайту футбольного клубу`}
            img={fckarpaty}
            reverse={false}
          />
        </div>
        <Link href='/' className={styles.showcase__btn}>Переглянути всі проєкти <FontAwesomeIcon
            className={styles.hero__btn_icon}
            icon={faArrowRight}
          />
        </Link>
      </section>
    </div>
  );
}
