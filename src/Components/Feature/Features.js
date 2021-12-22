import React from "react";
import featureImg1 from "../../Assets/feature.png";
import featureImg2 from "../../Assets/feature1.png";
import featureImg3 from "../../Assets/feature2.png";
import FeatureItem from "./FeatureItem";
import style from "./Feature.module.css";
import SwiperCore, { Virtual, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Virtual, Pagination, Navigation]);

function Feature() {
  const IMG = [
    featureImg1,
    featureImg2,
    featureImg3,
    featureImg1,
    featureImg2,
    featureImg3,
    featureImg1,
    featureImg2,
    featureImg3,
  ];
  return (
    <div className={style.contain}>
      <h2>Feature</h2>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={15}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {IMG.map((img, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <FeatureItem content={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Feature;
