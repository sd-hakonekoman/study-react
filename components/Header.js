import styles from '@/components/Header.module.css'
import Link from "next/link";

export function Header() {
  return (
    <header className={styles['c-header']}>
      <Link href="/" className={styles['c-header__anchor']}>
        Indexページ
      </Link>

      <Link href="/about" className={styles['c-header__anchor']}>
        Aboutページ
      </Link>
    </header>
  )
}
