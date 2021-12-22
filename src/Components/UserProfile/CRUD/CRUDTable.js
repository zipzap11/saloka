import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Button from "../../Button";
import CRUDTableRow from "./CRUDTableRow";
import product from "../../../Assets/product.png";
import product1 from "../../../Assets/product-cart.png";
import AddProductForm from "./AddProductForm";
import UpdateProductForm from "./UpdateProductForm";

function createData(id, name, price, image, sold, stock, desc) {
  return { id, image, name, price, stock, sold, desc };
}

const rows = [
  createData(
    1,
    "Nama barang",
    "Rp. 100.000",
    product,
    "100",
    "500",
    "Some Dummy Products for demo."
  ),
  createData(
    2,
    "Nama barang",
    "Rp. 200.000",
    product1,
    "200",
    "1000",
    "Some Dummy Products for demo."
  ),
  createData(
    3,
    "Nama barang",
    "Rp. 100.000",
    product,
    "100",
    "500",
    "Some Dummy Products for demo."
  ),
  createData(
    4,
    "Nama barang",
    "Rp. 200.000",
    product1,
    "200",
    "1000",
    "Some Dummy Products for demo."
  ),
];

function CRUDTable() {
  const [products, setProducts] = useState(rows);
  // const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  function deleteHandler(id) {
    setProducts((prev) => {
      return prev.filter((pre) => pre.id !== id);
    });
  }

  function updateHandler(data) {
    // const updatedItem = products.find((product) => product.id === data.id);
    setUpdateData(data);
    setIsUpdating(true);
  }

  function addProductHandler() {
    setIsAdding(true);
  }

  function addFinishHandler(data) {
    setProducts((prev) => [...prev, data]);
    setIsAdding(false);
  }

  function updateFinishHandler(data) {
    const updatedRows = products.filter((product) => product.id !== data.id);
    setProducts([...updatedRows, data]);
    setIsUpdating(false);
  }

  if (isUpdating) {
    return (
      <UpdateProductForm data={updateData} onFinish={updateFinishHandler} />
    );
  }

  if (isAdding) {
    return <AddProductForm onFinish={addFinishHandler} />;
  }
  // function fetchData() {
  // fetch("")
  //   .then((res) => res.json())
  //   .then((data) => {});
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Card style={{ padding: "1rem" }}>
      <Typography gutterBottom variant="h5">
        Dashboard
      </Typography>
      <TableContainer
        style={{ maxHeight: "400px", overflow: "auto", marginBottom: "1rem" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Foto</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell align="center">Harga</TableCell>
              <TableCell align="center">Terjual</TableCell>
              <TableCell align="center">Stok</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, idx) => (
              <CRUDTableRow
                onDelete={deleteHandler}
                onUpdate={updateHandler}
                key={idx}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={addProductHandler} style={{ marginLeft: "auto" }}>
        Add Product
      </Button>
    </Card>
  );
}

export default CRUDTable;
