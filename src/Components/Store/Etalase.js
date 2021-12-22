import { Card, Divider, List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Etalase.module.css";

const DUMMY = ["Makanan", "Minuman", "Sepokat"];
function Etalase({ onChange }) {
  return (
    <aside>
      <Card style={{ padding: "1rem", borderRadius: "10px" }}>
        <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
          Etalase
        </Typography>
        <Divider />
        <List>
          <ListItem style={{ textAlign: "center" }} button>
            Semua Barang
          </ListItem>
          {DUMMY.map((etal, idx) => {
            return (
              <ListItem
                key={idx}
                button
                style={{ display: "flex", alignItems: "center" }}
              >
                <button onClick={() => onChange(etal)} className={styles.btn}>
                  <Typography variant="subtitle1">{etal}</Typography>
                </button>
              </ListItem>
            );
          })}
        </List>
      </Card>
    </aside>
  );
}

export default Etalase;
