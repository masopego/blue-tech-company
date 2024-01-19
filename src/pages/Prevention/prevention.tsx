import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";

import { TEXTS, RISKS } from "./content/literals";

export const Prevention: React.FC = () => {
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
        <Typography component="h4" variant="h6">
          Modalidad de Prevención de Riesgos Laborales
        </Typography>
        <Divider />
        {TEXTS.map((text, index) => (
          <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}

        <Typography component="h4" variant="h6">
          Riesgo laboral en Blue Tech
        </Typography>
        <Divider />
        {RISKS.map((risk, index) => (
          <Typography key={`risk-${index}`} sx={{ marginBottom: "10px" }}>
            {risk}
          </Typography>
        ))}
      </Box>
      <Footer />
    </>
  );
};
