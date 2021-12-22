import React, { useState } from "react";
import Card from "../Card";
import Button from "../Button";
import { ReactComponent as ShippingIcon } from "../../Assets/shipping-icon.svg";
import { ReactComponent as CartProduct } from "../../Assets/cart-product.svg";
import style from "./Product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import swipeStyle from "./Swiper.module.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./arrow.css";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cart-slice";
import { Typography } from "@material-ui/core";

SwiperCore.use([Navigation, Thumbs]);

function Product({ data }) {
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispacth = useDispatch();
  function incrementQuantity() {
    setQuantity((prev) => {
      return prev + 1;
    });
  }
  function decrementQuantity() {
    setQuantity((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }

  function addToCartHandler() {
    dispacth(
      cartActions.addItem({
        id: data.id,
        name: data.title,
        price: data.price,
        quantity: quantity,
        totalPrice: quantity * data.price,
        img: data.image,
      })
    );
  }

  const bigImg = data.image;
  // const images = data.img.slice(1, data.img.length);
  const images = [1, 2, 3, 4, 5];
  return (
    <Card
      style={{
        boxShadow:
          "0px 28px 80px rgba(0, 0, 0, 0.0196802), 0px 11.6977px 33.4221px rgba(0, 0, 0, 0.0282725), 0px 6.25417px 17.869px rgba(0, 0, 0, 0.035), 0px 3.50603px 10.0172px rgba(0, 0, 0, 0.0417275), 0px 1.86203px 5.32008px rgba(0, 0, 0, 0.0503198), 0px 0.774832px 2.21381px rgba(0, 0, 0, 0.07)",
        borderRadius: "5px",
        marginBottom: "1.5rem",
      }}
    >
      <div className={style.contain}>
        <div className={style.left}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={5}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            {images.map((img, i) => {
              return (
                <SwiperSlide key={i} className={swipeStyle.swiper1}>
                  <img src={bigImg} alt="img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            className="mySwiper"
          >
            {images.map((img, i) => {
              return (
                <SwiperSlide key={i} className={swipeStyle.swiper2}>
                  <img src={bigImg} alt="img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={style.right}>
          <h2>{data.title}</h2>
          <p className={style.price}>${data.price}</p>
          <div className={style.shipping}>
            <h5>Pengiriman</h5>
            <div className={style.info}>
              <p style={{ display: "flex", alignItems: "flex-start" }}>
                <ShippingIcon />
                Dikirim dari Jakarta Pusat
              </p>
              <p>Estimasi Ongkir --{">"} Rp. 10.000</p>
            </div>
          </div>
          <div className={style.quantity}>
            <h5>Kuantitas</h5>
            <div className={style.actions}>
              <button onClick={decrementQuantity}>-</button>
              <p className={style.count}>{quantity}</p>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div className={style.itemActions}>
            <Button
              style={{ padding: "1rem" }}
              className={style.btn}
              onClick={addToCartHandler}
            >
              <CartProduct className={style.cartIcon} /> Tambah ke Keranjang
            </Button>
            <Button className={style.btn} style={{ padding: "1rem" }}>
              Beli langsung
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Product;
