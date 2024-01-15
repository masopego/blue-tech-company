import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";

import {
  TEXTS,
  CALENDAR_TEXTS,
  MONEY_TEXTS,
  CONTROL_TEXTS,
} from "./content/literals";

export const Communication: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          p: "20px",
        }}
      >
        <Typography component="h2" variant="h5">
          Empoderando Negocios, Conectando Comunidades
        </Typography>
        {TEXTS.map((text, index) => (
          <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}

        <Typography component="h4" variant="h6">
          Calendario de Campañas
        </Typography>
        <Divider />

        {CALENDAR_TEXTS.map((text, index) => (
          <Typography key={`calendar-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}

        <Typography component="h4" variant="h6">
          Presupuesto detallado
        </Typography>
        <Divider />
        {MONEY_TEXTS.map((text, index) => (
          <Typography key={`money-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}
        <Typography component="h4" variant="h6">
          Evaluación y control
        </Typography>
        <Divider />
        {CONTROL_TEXTS.map((text, index) => (
          <Typography key={`control-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}
      </Box>
      <Footer />
    </>
  );
};
