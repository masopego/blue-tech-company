import * as React from "react";

import { Box, Typography } from "@mui/material";

import { TEXTS } from "./content/literals";

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
    </Box>
  );
};
