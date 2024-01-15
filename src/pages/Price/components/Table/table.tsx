import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "./table.style";

function createData(name: string, price: number) {
  return { name, price };
}

const rows = [
  createData(
    "Desarrollo web (incluye creación de una plataforma online y su puesta en producción)",
    80
  ),
  createData("Mantenimiento técnico, (bolsa de horas por proyecto)", 90),
  createData(
    "Mentoría técnica (masterclass de un tema tecnológico en concreto - a elegir por el cliente)",
    50
  ),
  createData("Consultoría tecnológica", 60),
  createData(
    "Formación técnica sobre un tema concreto - por ejemplo front, back, devops",
    60
  ),
];

export default function CustomizedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Servicio</StyledTableCell>
            <StyledTableCell align="right">Precio por hora</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
