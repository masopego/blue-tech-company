import React from "react";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import { Box, Divider, Typography } from "@mui/material";
import { GENERAL_TEXTS, SPECIFIC_TEXTS } from "./content/literals";
import Table from "./components/Table/table";

export const Environment: React.FC = () => {
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
          Entorno general
        </Typography>
        <Divider />
        {GENERAL_TEXTS.map((general, index) => (
          <>
            <Typography
              key={`general-${index}`}
              variant="subtitle1"
              sx={{ marginBottom: "10px", textDecoration: "underline" }}
            >
              {general.title}
            </Typography>
            <Typography key={`general-${index}`} sx={{ marginBottom: "10px" }}>
              {general.description}
            </Typography>
          </>
        ))}
        <Typography component="h4" variant="h6">
          Entorno específico
        </Typography>
        <Divider />

        <Typography
          component="h5"
          variant="subtitle1"
          sx={{ marginBottom: "10px", textDecoration: "underline" }}
        >
          Competidores
        </Typography>

        <Table />

        {SPECIFIC_TEXTS.map((specific, index) => (
          <>
            <Typography
              key={`specific-text-${index}`}
              sx={{ marginBottom: "10px", textDecoration: "underline" }}
            >
              {specific.title}
            </Typography>
            <Typography key={`general-${index}`} sx={{ marginBottom: "10px" }}>
              {specific.description}
            </Typography>
          </>
        ))}
      </Box>
      <Footer />
    </>
  );
};
