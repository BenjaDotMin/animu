"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./carousel.module.scss";

const Carousel = ({items, title}) => {
  return <div className={styles.carousel}>
    <h2 className="fs-rg white-text flex sb">{title} <span className="fs-sm fw-rg">View all</span></h2>
    <Swiper className={styles.swiper}
      spaceBetween={12}
      slidesPerView={2.5}>
      {items.map(item => 
        <SwiperSlide className={styles.swiperSlide} key={item.mal_id}><img src={item.images.webp.image_url}/></SwiperSlide>
      )}
    </Swiper>
  </div>
}

export default Carousel



