import React from "react";

import { Avatar, Box, Divider, Typography } from "@mui/material";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";

import { TEXTS, LIFE_TEXTS } from "./content/literals";

import img from "./content/logo.png";

export const Product: React.FC = () => {
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
        <Avatar alt="Blue Tech Logo" src={img} sx={{ width: 70, height: 70 }} />
        {TEXTS.map((text, index) => (
          <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}
        <Typography component="h4" variant="h6">
          Ciclo de vida del Producto
        </Typography>
        <Divider />

        {LIFE_TEXTS.map((text, index) => (
          <Typography key={`life-text-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}
      </Box>
      <Footer />
    </>
  );
};
