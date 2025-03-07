import styles from "./info.module.scss";

const Info = ({score, episodes, rating}) => {
  let ratingColour = rating === "R - 17+ (violence & profanity)" ? "--red"
    : rating === "R+ - Mild Nudity" ? "--red"
    : rating === "Rx - Hentai" ? "--red"
    : rating === "PG-13 - Teens 13 or older" ? "--yellow"
    : rating === "PG - Children" ? "--green"
    : rating === "G - All Ages" ? "--green"
    : "--green"
  return <ul className={`${styles.info} flex`}>
    <li><img src="/images/star.svg" alt="" /> {score}</li>
    <li>{episodes} episodes</li>
    <li className="age" style={{"backgroundColor": `var(${ratingColour})`}}>
      {
        rating === "R - 17+ (violence & profanity)" ? "18"
        : rating === "Rx - Hentai" ? "18"
        : rating === "R+ - Mild Nudity" ? "R+"
        : rating === "PG-13 - Teens 13 or older" ? "PG"
        : rating === "G - All Ages" ? "G"
        : "?"
      }
    </li>
</ul>
}

export default Info