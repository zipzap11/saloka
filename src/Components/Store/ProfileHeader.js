import { Avatar, Box, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import Button from "../../Components/Button";
import styles from "./ProfileHeader.module.css";
import ChatIcon from "@material-ui/icons/Chat";
import { ReactComponent as ProductIcon } from "../../Assets/product-icon.svg";
import { ReactComponent as StarIcon } from "../../Assets/star.svg";
function ProfileHeader({ data }) {
  return (
    <Card className={styles.card}>
      <div className={styles.wrapper}>
        <img src={data.banner} alt="img" />
      </div>
      <Grid className={styles.container} container>
        <Grid
          justifyContent="space-evenly"
          className={styles.left}
          alignItems="center"
          container
          item
          xs={5}
        >
          <Grid item xs={12} sm={3}>
            <Avatar
              style={{ width: "110px", height: "auto" }}
              className={styles.avatar}
              src={data.avatar}
              alt="avatar"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h5">
              {data.namaToko}
            </Typography>
            <div className={styles.flex}>
              <Typography variant="subtitle1">{data.address}</Typography>
              <div className={styles.divider}>|</div>
              <Typography variant="subtitle1">{data.followers}</Typography>
            </div>
            <div className={styles.actions}>
              <Button>+ Ikuti</Button>
              <Button>
                <ChatIcon /> Chat
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={1}>
          <div className={styles.line}></div>
        </Grid>
        <Grid className={styles.right} container item xs={6}>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom variant="subtitle1">
              Penilaian
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <StarIcon className={styles.star} />
              <Typography variant="h4" className={styles.point}>
                {data.stars}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} alignItems="center" container>
            <Typography
              className={styles.flex}
              gutterBottom
              variant="subtitle1"
            >
              <ProductIcon />
              <span className={styles.sold}>{data.sold} </span> Produk Terjual
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProfileHeader;
