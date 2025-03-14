"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'next-view-transitions';
import 'swiper/css';
import styles from "./carousel.module.scss";

const Carousel = ({items, title}) => {
  //console.log(items)
  
  return <div className={styles.carousel}>
    <h2 className="fs-rg white-text flex sb">{title} <span className="fs-sm fw-rg">View all</span></h2>
    <Swiper className={styles.swiper}
      spaceBetween={12}
      slidesPerView={2.5}>
        
      {items.map((item, i) => 
        (item.entry && !item.votes) ?        
          item.entry.map((l, j) => 
            <SwiperSlide className={styles.swiperSlide} key={j}>
              <Link className='white-text fs-sm' href={item.name ? `/characters/${item.entry[j].mal_id}`:`/details/${item.entry[j].mal_id}`}>
                <img src={item.entry[j].images.webp.image_url }/>
                {item.entry[j].title}
              </Link>
            </SwiperSlide>
          )         
        : (item.entry && item.votes) ? 
        <SwiperSlide className={styles.swiperSlide} key={i}>
          <Link className='white-text fs-sm' href={`/details/${item.entry.mal_id}`}>
            <img src={item.entry.images.webp.image_url }/>
            {item.entry.title}
          </Link>
        </SwiperSlide>
        : item.character ? 
        <SwiperSlide className={styles.swiperSlide} key={i}>
          <Link className='white-text fs-sm' href={`/characters/${item.character.mal_id}`}>
            <img src={item.character.images.webp.image_url }/>
            {item.character.name}
          </Link>
        </SwiperSlide>
        :
        <SwiperSlide className={styles.swiperSlide} key={i}>
          <Link className='white-text fs-sm' href={item.name ? `/characters/${item.mal_id}`:`/details/${item.mal_id}`}>
            <img src={item.images.webp.image_url }/>
            {item.title || item.name}
          </Link>
        </SwiperSlide>
      )}
    </Swiper>
  </div>
}

export default Carousel



