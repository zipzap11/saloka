import React from "react";
import style from "./Comment.module.css";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { Avatar } from "@material-ui/core";
function Comment({ data }) {
  return (
    <div className={style.contain}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <Avatar src={data.img} alt="img" />
        </div>
      </div>
      <div className={style.right}>
        <h4>{data.name}</h4>
        <div className={style.info}>
          <p className={style.point}>
            {data.star} <Star className={style.star} />
          </p>
          <p className={style.time}>{data.time} lalu</p>
        </div>
        <p className={style.comment}>{data.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
