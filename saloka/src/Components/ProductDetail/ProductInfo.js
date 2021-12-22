import React from "react";
import style from "./ProductInfo.module.css";
import Card from "../Card";
function ProductInfo({ data }) {
  return (
    <Card
      style={{
        boxShadow:
          "0px 28px 80px rgba(0, 0, 0, 0.0196802), 0px 11.6977px 33.4221px rgba(0, 0, 0, 0.0282725), 0px 6.25417px 17.869px rgba(0, 0, 0, 0.035), 0px 3.50603px 10.0172px rgba(0, 0, 0, 0.0417275), 0px 1.86203px 5.32008px rgba(0, 0, 0, 0.0503198), 0px 0.774832px 2.21381px rgba(0, 0, 0, 0.07)",
        borderRadius: "5px",
        width: "75%",
        marginRight: "1.5rem",
      }}
    >
      <div className={style.info}>
        <h3>Informasi Barang</h3>
        <div className={style.spec}>
          <h4>Spesifikasi</h4>
          <p>Kondisi : </p>
          <p>Kategori : </p>
          <p>Berat : </p>
          <p>Asal : </p>
          <p>Ukuran : </p>
        </div>
        <div className={style.desc}>
          <h4>Deskripsi</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default ProductInfo;
