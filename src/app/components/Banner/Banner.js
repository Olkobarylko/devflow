import styles from './Banner.module.scss';
import Link from 'next/link';
export default function Banner () {
    return (
        <div className={styles.banner}>
            <Link href='/' className={styles.banner__title}>Давайте поспілкуємось?</Link>
            <div className={styles.banner__contacts}>
                <Link href='/' className={styles.banner__contact}>+38 063 832 68 42</Link>
                <Link href='/' className={styles.banner__contact}>abra.agency@gmail.com</Link>
            </div>
        </div>
    )
}