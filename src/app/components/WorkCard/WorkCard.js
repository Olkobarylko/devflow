import styles from './WorkCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function WorkCard({title, subtitle, img}) {
    return(
        <div className={styles.work_card}>
            <div className={styles.work_card__text_container}>
                <h3 className={styles.work_card__title}>{title}</h3>
                <p className={styles.work_card__subtitle}>{subtitle}</p>
                <Link href='/' className={styles.work_card__btn}>Переглянути проєкт</Link>
            </div>
            <div className={styles.work_card__img_container}>
                <Image className={styles.work_card__img} src={img} alt='' />
            </div>
        </div>
    )
}