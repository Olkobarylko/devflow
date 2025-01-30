'use client'
import styles from "./page.module.scss";
import Image from "next/image";
import Card from "../components/Card/Card";
import js from "../../../public/images/js.svg";
import python from "../../../public/images/python.svg";
import django from "../../../public/images/django.svg";
import php from "../../../public/images/php.svg";
import wordpress from "../../../public/images/wordpress.svg";
import api from "../../../public/images/api.svg";
import testing from "../../../public/images/testing.svg";
import ui from "../../../public/images/ui.svg";
import brand from "../../../public/images/branding.svg";
import copywriting from "../../../public/images/copywriting.svg";
import python_img from "../../../public/images/python-img.svg";
import django_img from "../../../public/images/django-img.svg";
import wagtail_img from "../../../public/images/wagtail-img.svg";
import js_img from "../../../public/images/js-img.svg";
import vue_img from "../../../public/images/vue-img.svg";
import nuxt_img from "../../../public/images/nuxt-img.svg";
import php_img from "../../../public/images/php-img.svg";
import wordpress_img from "../../../public/images/wordpress-img.svg";
import docker_img from "../../../public/images/docker-img.svg";
import figma_img from "../../../public/images/figma-img.svg";

export default function Services() {

  return (
    <div>
      <section className={styles.list_icons}>
        <h2 className={styles.list_icons__title}>Наші послуги</h2>
        <p className={styles.list_icons__subtitle}>
          Abra Agency — ваш надійний партнер у світі веб-рішень з більш ніж
          10-річним досвідом. Ми спеціалізуємося на наданні послуг повного циклу
          в галузі веб-розробки та дизайну, створенні веб-додатків та
          корпоративних порталів. За допомогою поєднання нашого технічного
          експертизу та глибокого розуміння останніх тенденцій, ми пропонуємо
          передові веб-рішення.
        </p>
        <ul className={styles.list_icons__items}>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={js}
            />
            <p className={styles.list_icons__item_text}>
              JavaScript development
            </p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={python}
            />
            <p className={styles.list_icons__item_text}>Python development</p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={django}
            />
            <p className={styles.list_icons__item_text}>Django development</p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={php}
            />
            <p className={styles.list_icons__item_text}>PHP development</p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={wordpress}
            />
            <p className={styles.list_icons__item_text}>
              WordPress development
            </p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={api}
            />
            <p className={styles.list_icons__item_text}>API development</p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={testing}
            />
            <p className={styles.list_icons__item_text}>Automated testing</p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={ui}
            />
            <p className={styles.list_icons__item_text}>UI/UX Design</p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={brand}
            />
            <p className={styles.list_icons__item_text}>Branding</p>
          </li>
          <li className={styles.list_icons__item}>
            <Image
              className={styles.list_icons__item_img}
              alt="icon"
              src={copywriting}
            />
            <p className={styles.list_icons__item_text}>Copywriting</p>
          </li>
        </ul>
      </section>
      <section className={styles.list_cards}>
        <h2 className={styles.list_cards__title}>Зробимо для вас:</h2>
        <ul className={styles.list_cards__items}>
          <li>
            <Card
              title={`Лендинг`}
              text={`Односторінкові сайти, створені для конкретної маркетингової цілі, такої як залучення клієнтів або продаж товару.`}
            />
          </li>
          <li>
            <Card
              title={`Корпоративний сайт`}
              text={`Сайти компаній та організацій, які представляють їхні продукти, послуги та контактну інформацію.`}
            />
          </li>
          <li>
            <Card
              title={`Брендбук`}
              text={`Ми розробимо індивідуальний брендбук, який не тільки виділить ваш бренд серед конкуретнів, а й підсилить вашу унікальність на ринку.`}
            />
          </li>
          <li>
            <Card
              title={`Copywriting`}
              text={`Пишемо якісні та унікальні тексти, які донесуть цінність вашого продукту чи послуги до споживачів.`}
            />
          </li>
          <li>
            <Card
              title={`Лендинг`}
              text={`Односторінкові сайти, створені для конкретної маркетингової цілі, такої як залучення клієнтів або продаж товару.`}
            />
          </li>
          <li>
            <Card
              title={`Корпоративний сайт`}
              text={`Сайти компаній та організацій, які представляють їхні продукти, послуги та контактну інформацію.`}
            />
          </li>
          <li>
            <Card
              title={`Інтернет-магазин`}
              text={`Сайти для продажу товарів та послуг, де користувачі можуть здійснювати покупки онлайн.`}
            />
          </li>
          <li>
            <Card
              title={`Веб-додаток`}
              text={`Інтерактивні інтернет-додатки, які надають користувачам специфічні функції або сервіси, такі як калькулятори, інструменти для редагування фотографій тощо.`}
            />
          </li>
          <li>
            <Card
              title={`Інформаційний сайт`}
              text={`Сайти, що надають інформацію на різні теми, такі як новини, блоги, статті.`}
            />
          </li>
          <li>
            <Card
              title={`Портал для бронювання`}
              text={`Сайти для бронювання готелів, авіаквитків, машин тощо.`}
            />
          </li>
          <li>
            <Card
              title={`Портфоліо`}
              text={`Сайти, де творчі фахівці (дизайнери, фотографи, письменники тощо) представляють свої роботи.`}
            />
          </li>
          <li>
            <Card
              title={`Освітня платформа`}
              text={`Сайти, що надають навчальний контент, курси, матеріали для навчання.`}
            />
          </li>
        </ul>
      </section>
      <section className={styles.list_img}>
        <h2 className={styles.list_img__title}>Наші технології</h2>
        <ul className={styles.list_img__items}>
            <li className={styles.list_img__item}>
                <Image src={python_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={django_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={wagtail_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={js_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={vue_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={nuxt_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={php_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={wordpress_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={docker_img} alt="" />
            </li>
            <li className={styles.list_img__item}>
                <Image src={figma_img} alt="" />
            </li>
        </ul>
      </section>
    </div>
  );
}
