import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Button from "../../Button";
import product from "../../../Assets/product-cart.png";
function CRUDTableRow({ row, onDelete, onUpdate }) {
  function deleteHandler() {
    onDelete(row.id);
  }

  function updateHandler() {
    onUpdate(row);
  }

  return (
    <TableRow>
      <TableCell>
        <img width="100px" height="100px" src={product} alt="img" />
      </TableCell>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="center">{row.price}</TableCell>
      <TableCell align="center">{row.sold}</TableCell>
      <TableCell align="center">{row.stock}</TableCell>
      <TableCell align="center">
        <Button onClick={deleteHandler}>Delete</Button>
      </TableCell>
      <TableCell align="center">
        <Button onClick={updateHandler}>Update</Button>
      </TableCell>
    </TableRow>
  );
}

export default CRUDTableRow;
