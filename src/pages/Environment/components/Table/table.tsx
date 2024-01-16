import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "./table.style";

function createData(
  name: string,
  localization: string,
  life: string,
  services: string,
  clients: string
) {
  return { name, localization, life, services, clients };
}

const rows = [
  createData(
    "Coderty",
    "Local y algunas actuaciones en otros territorios",
    "Más de cinco años de experiencia",
    "Consultoría estratégica, gestión de proyectos, desarrollo de aplicaciones y plataformas web, desarrollo móvil / híbrido / PWA, Cloud",
    "Syngenta, Foodic, Twenix, TuFisio, Junta de Andalucía, Universidad Complutense"
  ),
  createData(
    "Digital 55",
    "Nacional",
    "Desde 2004",
    "Consultoría estratégica, consultoría UX, Project Management, diseño de interacción, desarrollo de software, gestión y control de calidad",
    "Indra, Mapfre, La Liga, Acciona, Ayuntamiento de Madrid, Axa"
  ),
  createData(
    "Hiberus Tecnología",
    "Nacional, aunque cuenta con oficina en la ciudad",
    "Desde 2011",
    "Consultoría técnica y estrategia, desarrollo y outsourcing, tecnologías diferenciales, sistemas, Cloud, marketing",
    "Amadeus, El Corte Inglés, DKV, Agencia Tributaria, Ilunion"
  ),
  createData(
    "Mclick",
    "Local",
    "Desde 2023",
    "Consultoría técnica, marketing ERP / CRM, programa de gestión integral, gestión de procesos y desarrollo de aplicaciones web y móviles",
    "Ayuntamiento de Almería, Vicasol, Club Naútico de Aguadulce, La Voz de Almería"
  ),
];

export default function CustomizedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Empresa</StyledTableCell>
            <StyledTableCell align="right">Ámbito de actuación</StyledTableCell>
            <StyledTableCell align="right">Experiencia</StyledTableCell>
            <StyledTableCell align="right">
              Servicios que ofrecen
            </StyledTableCell>
            <StyledTableCell align="right">Clientes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.localization}
              </StyledTableCell>
              <StyledTableCell align="right">{row.life}</StyledTableCell>
              <StyledTableCell align="right">{row.services}</StyledTableCell>
              <StyledTableCell align="right">{row.clients}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
