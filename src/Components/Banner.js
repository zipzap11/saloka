import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import styles from "./Banner.module.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Banner({ content }) {
  const contents = [];
  for (let i = 0; i < 5; i++) {
    contents.push(
      <SwiperSlide key={i}>
        <div className={styles.wrapper}>
          <img className={styles.banner} src={content} alt="banner" />
        </div>
      </SwiperSlide>
    );
  }
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1900,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {contents.map((Content) => {
        return Content;
      })}
    </Swiper>
  );
}

export default Banner;
