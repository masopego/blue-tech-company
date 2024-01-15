import React from "react";

import { Box, Typography } from "@mui/material";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";

import { TEXTS } from "./content/literals";

export const Supply: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          p: "20px",
        }}
      >
        {TEXTS.map((text, index) => (
          <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}
      </Box>
      <Footer />
    </>
  );
};
