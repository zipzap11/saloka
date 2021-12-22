import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

const bannerStyle = {
  width: "100%",
  maxHeight: "220px",
  objectFit: "cover",
  borderRadius: "33px",
};

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Banner({ content }) {
  const contents = [];
  for (let i = 0; i < 5; i++) {
    contents.push(
      <SwiperSlide key={i}>
        <img style={bannerStyle} src={content} alt="banner" />
      </SwiperSlide>
    );
  }
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
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
    // <div style={{ margin: "0 auto", width: "100%" }}>
    //   <img
    //     src={content}
    //     alt="banner"
    //     style={{
    //       width: "100%",
    //       maxHeight: "220px",
    //       objectFit: "cover",
    //       borderRadius: "33px",
    //     }}
    //   />
    // </div>
  );
}

export default Banner;
