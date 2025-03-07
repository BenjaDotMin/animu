import styles from "./filter.module.scss";

const Filter = () => {
  return <ul className={`${styles.filter} flex`}>
    <li>Anime</li>
    <li>Manga</li>
    <li>Categories <img src="/images/chevron-down.svg" alt="" /></li>
  </ul>
}

export default Filter