'use client';
import { usePathname } from 'next/navigation';
import {Link} from 'next-view-transitions';
import styles from "./header.module.scss";

const Header = () => {
  const pathname = usePathname();

  return <header className={styles.header}>
    <nav className="flex sb v-center">
      <Link href={"/"} className={`${styles.back} ${pathname === "/" ? "" : `${styles.show}`}`}><img  src="/images/arrow.svg" alt="" /></Link>
      <img className={`${pathname === "/" ? "" : `${styles.hide}`}`}  src="/images/animu-logo.svg" alt="Animu - find anime and manga" />
      <img src="/images/search.svg" alt="search" />
    </nav>
  </header>
}

export default Header