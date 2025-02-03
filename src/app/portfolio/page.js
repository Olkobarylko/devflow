import styles from "./page.module.scss";
import WorkCard from "../components/WorkCard/WorkCard";
import Card from "../components/Card/Card";
import local from "../../../public/images/local.png";
import boichuk from "../../../public/images/boichuk.png";
import karpaty from "../../../public/images/karpaty.png";
import granocielo from "../../../public/images/granocielo.png";
import game from "../../../public/images/game.png";
import karpaty_shop from "../../../public/images/karpaty-shop.png";
import damo_radu from "../../../public/images/damo-radu.png";
import shyly_karpat from "../../../public/images/shyly-karpat.png";
import nad_levom from "../../../public/images/nad-levom.png";
import olyvka from "../../../public/images/olyvka.png";

export default function Portfolio() {
  return (
    <div>
      <section className={styles.showcase}>
        <h2 className={styles.showcase__title}>Наші проєкти</h2>
        <p className={styles.showcase__subtitle}>
          Ознайомтеся з нашими кейсами у сфері розробки вебсайтів, дизайну
          UI/UX, брендингу, ІТ-консультацій та інших сфер.
        </p>
        <WorkCard
          title={`Мультимедійна онлайн-платформа "Локальна історія"`}
          subtitle={`Розробка та редизайн веб-сайту`}
          img={local}
          reverse={false}
        />
        <WorkCard
          className={styles.showcase__item_reverse}
          title={`Бренд одягу "Boichuk"`}
          subtitle={`Розробка стилю та веб-сайту для бренду Boichuk`}
          img={boichuk}
          reverse={true}
        />
        <WorkCard
          title={`Футбольний клуб "Карпати"Львів`}
          subtitle={`Розробка сайту для футбольного клубу`}
          img={karpaty}
          reverse={false}
        />
        <WorkCard
          title={`Італійська піцерія "Granociela"`}
          subtitle={`Розробка логотипу та айдентики для піцерії контр-тренду в Італії`}
          img={granocielo}
          reverse={true}
        />
        <WorkCard
          title={`Симуляційна онлайн-гра "Я - країна"`}
          subtitle={`Розробка брендингу та дизайну для онлайн симуляційної гри`}
          img={game}
          reverse={false}
        />
      </section>
      <section className={styles.list}>
        <h2 className={styles.list__title}>Зробимо для вас:</h2>
        <ul className={styles.list__items}>
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
        </ul>
      </section>
      <section className={styles.showcase}>
        <WorkCard
          title={`Інтернет-магазин "Карпати" Львів`}
          subtitle={`Розробка інтернет-магазину "Карпати" Львів`}
          img={karpaty_shop}
          reverse={true}
        />
        <WorkCard
          title={`Агенція "Дамо раду"`}
          subtitle={`Розробка логотипу та веб-сайту`}
          img={damo_radu}
          reverse={false}
        />
        <WorkCard
          title={`Відпочинковий комплекс "Схили Карпат"`}
          subtitle={`Ребрендинг для готельного комплексу "Гостинна оселя на схилах Карпат"`}
          img={shyly_karpat}
          reverse={true}
        />
        <WorkCard
          title={`Відео колеції "Над Левом"`}
          subtitle={`Розробка сайту відео колеції для Української Галицької Партії`}
          img={nad_levom}
          reverse={false}
        />
        <WorkCard
          title={`Ресторан італійської кухні "Оливка"`}
          subtitle={`Розробка логотипу та айдентики для піцерії контр-тренду у Львові`}
          img={olyvka}
          reverse={true}
        />
      </section>
      <section className={styles.list}>
        <h2 className={styles.list__title}>Замовляйте у нас:</h2>
        <ul className={styles.list__items}>
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
    </div>
  );
}
