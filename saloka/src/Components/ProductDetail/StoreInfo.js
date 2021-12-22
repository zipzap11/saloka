import React from "react";
import storeImg from "../../Assets/store.png";
import Button from "../Button";
import Card from "../Card";
import { ReactComponent as VisitStore } from "../../Assets/visit-store.svg";
import style from "./StoreInfo.module.css";
import { Link } from "react-router-dom";

function StoreInfo({ data }) {
  const storeId = data.storeId;
  const DUMMY = {
    name: "Nama Toko",
    img: storeImg,
    sold: 99.9,
    followers: 99,
    timeRange: "1-2 hari",
  };
  return (
    <Card>
      <div className={style.contain}>
        <div className={style.head}>
          <div className={style.imgWrapper}>
            <img src={DUMMY.img} alt="img" />
          </div>
          <h3>{DUMMY.name}</h3>
        </div>
        <div className={style.body}>
          <p>
            <span className={style.greenText}>{DUMMY.sold}RB</span> Produk
            Terjual
          </p>
          <p>
            <span className={style.greenText}>{DUMMY.sold}RB</span> Pengikut
          </p>
          <p>
            <span className={style.greenText}>{DUMMY.timeRange}</span> Waktu
            Proses Pemesanan
          </p>
        </div>
        <Link to={`/store/${storeId ? storeId : ""}`}>
          <Button style={{ marginTop: "1.2rem" }}>
            <VisitStore /> Kunjungi Toko
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default StoreInfo;
