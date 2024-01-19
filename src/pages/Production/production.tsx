import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";

import { TEXTS } from "./content/literals";

export const Production: React.FC = () => {
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
          PLAN DE PRODUCCIÓN O DE OPERACIONES
        </Typography>
        <Divider />
        {TEXTS.map((text, index) => (
          <>
            <Typography component="h5" variant="subtitle1">
              {text.title}
            </Typography>
            <Divider />
            <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
              {text.description}
            </Typography>
          </>
        ))}
      </Box>
      <Footer />
    </>
  );
};
