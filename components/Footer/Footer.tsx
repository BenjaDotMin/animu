import {Link} from 'next-view-transitions';
import styles from "./footer.module.scss";

const Footer = () => {

  return <footer className={styles.footer}>
    <nav>
      <ul>
        <li><Link href={"/"}><img src="/images/home.svg" alt="" />Home</Link></li>
        <li><Link href={"/"}><img src="/images/recommends.svg" alt="" />Recommendations</Link></li>
        <li><Link href={"/"}><img src="/images/watchlist.svg" alt="" />Watch List</Link></li>
      </ul>
    </nav>
  </footer>
}

export default Footer