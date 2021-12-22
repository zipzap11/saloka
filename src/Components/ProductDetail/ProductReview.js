import React, { useEffect, useState } from "react";
import Card from "../Card";
import { ReactComponent as Star } from "../../Assets/star.svg";
import CommentList from "./CommentList";
import style from "./ProductReview.module.css";
import profile from "../../Assets/avatar.png";
// import { useParams } from "react-router-dom";

const DUMMY = [
  {
    img: profile,
    name: "Nama",
    star: 4,
    time: "8 hari",
    comment:
      "Phasellus molestie eget purus aliquam, neque nunc egestas nunc. Neque nec feugiat in scelerisque.",
  },
  {
    img: profile,
    name: "Nama",
    star: 4,
    time: "8 hari",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra interdum at urna .",
  },
];

function ProductReview() {
  // const { productId } = useParams();
  const [stars, setStars] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [comments, setComments] = useState(DUMMY);

  useEffect(() => {
    // fetch("")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setComments(data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setIsLoading(false);
    //   });
    setIsLoading(false);
  }, [stars]);
  // console.log(stars);
  return (
    <Card>
      <div className={style.contain}>
        <h3>Ulasan Barang</h3>
        <div className={style.top}>
          <p className={style.point}>
            {stars === 0 ? "Semua" : stars} <Star />
          </p>
          <ul>
            <li className={style.filterItem}>Semua</li>
            <li onClick={() => setStars(1)} className={style.filterItem}>
              <Star /> 1
            </li>
            <li onClick={() => setStars(2)} className={style.filterItem}>
              <Star /> 2
            </li>
            <li onClick={() => setStars(3)} className={style.filterItem}>
              <Star /> 3
            </li>
            <li onClick={() => setStars(4)} className={style.filterItem}>
              <Star /> 4
            </li>
            <li onClick={() => setStars(5)} className={style.filterItem}>
              <Star /> 5
            </li>
          </ul>
        </div>
        <CommentList error={error} loading={isLoading} data={comments} />
      </div>
    </Card>
  );
}

export default ProductReview;
