import styles from "./genres.module.scss";

const Genres = ({genres}) => {
  return <ul className={`${styles.genres} flex`}>
    {genres.map(genre => <li key={genre.name}>{genre.name}</li>)}
  </ul>
}

export default Genres