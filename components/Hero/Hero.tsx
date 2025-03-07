"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'next-view-transitions';
import Filter from "../Filter/Filter";
import Genres from "../Genres/Genres";
import Info from "../Info/Info";
import styles from "./hero.module.scss";
import 'swiper/css';

const Hero = ({items}) => {
  const featureLabels = ["Most favourited", "Best upcoming", "Most popopular", "Best airing"];
  return <div className={styles.hero}>
    <Filter></Filter>
    <Swiper className={styles.swiper} spaceBetween={22}>
      {items.map((item, i) =>             
        <SwiperSlide key={i} className={styles.swiperSlide} onClick={e => e.target.style.viewTransitionName="toHero"}>
          <Link href={`/details/${item[0].mal_id}`}>
            <img src={item[0].images.webp.large_image_url} alt="" />
            <div className={styles.slideContent}>           
              <div className={styles.titles}>
                <label>{featureLabels[i]}</label>
                <h2 className="fs-lg ff-heading uppercase white-text">{item[0].title_english || item[0].title}</h2>
                <Genres genres={item[0].genres}></Genres>
                <Info score={item[0].score} episodes={item[0].episodes} rating={item[0].rating}></Info>
              </div>
            </div>
          </Link>
        </SwiperSlide>
    )}
    </Swiper>
  </div>
}

export default Hero

