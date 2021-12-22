import React from "react";
import style from "./Categories.module.css";
import CategoryItem from "./CategoryItem";
import categoryImg from "../../Assets/category.png";
import SwiperCore, { Virtual, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Link } from "react-router-dom";

SwiperCore.use([Virtual, Navigation]);

function Categories() {
  const arr = [];
  function dummyData() {
    for (let i = 0; i < 16; i++) {
      arr.push(categoryImg);
    }
  }

  dummyData();
  return (
    <div className={style.contain}>
      <h2>Category</h2>
      <Swiper
        breakpoints={{
          1000: {
            slidesPerView: 6,
          },
          850: {
            slidesPerView: 5,
          },
          700: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={9}
        navigation={true}
        virtual
      >
        {arr.map((img, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Link to={`/search?category=${""}`}>
              <CategoryItem content={img} name="category" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
