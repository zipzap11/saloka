import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

function PesananSection() {
  function createData(date, name, payment, price, shipping) {
    return { date, name, payment, price, shipping };
  }

  const rows = [
    createData(
      "1 Agustus 2021",
      "Nama barang",
      "Sudah dibayar",
      "Rp. 99.000",
      "Dalam Perjalanan"
    ),
    createData(
      "1 Agustus 2021",
      "Nama barang",
      "Sudah dibayar",
      "Rp. 99.000",
      "Dalam Perjalanan"
    ),
    createData(
      "1 Agustus 2021",
      "Nama barang",
      "Sudah dibayar",
      "Rp. 99.000",
      "Dalam Perjalanan"
    ),
    createData(
      "1 Agustus 2021",
      "Nama barang",
      "Sudah dibayar",
      "Rp. 99.000",
      "Dalam Perjalanan"
    ),
    createData(
      "1 Agustus 2021",
      "Nama barang",
      "Sudah dibayar",
      "Rp. 99.000",
      "Dalam Perjalanan"
    ),
    createData(
      "1 Agustus 2021",
      "Nama barang",
      "Sudah dibayar",
      "Rp. 99.000",
      "Dalam Perjalanan"
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nama</TableCell>
            <TableCell align="center">Tanggal</TableCell>
            <TableCell align="center">Pembayaran</TableCell>
            <TableCell align="center">Harga</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Invoice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.payment}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.shipping}</TableCell>
              <TableCell align="center">Invoice</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PesananSection;
