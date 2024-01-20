import * as React from "react";

import { Box, Typography } from "@mui/material";

import { NEW_TEXTS, TEXTS } from "./content/literals";

import teamImg from "./content/team.png";

export const Team: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {TEXTS.map((text, index) => (
        <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
          {text}
        </Typography>
      ))}
      <img src={teamImg} width={700} alt="Organigrama" />

      {NEW_TEXTS.map((text, index) => (
        <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
          {text}
        </Typography>
      ))}
    </Box>
  );
};
