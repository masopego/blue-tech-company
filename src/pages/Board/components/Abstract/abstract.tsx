import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { TEXTS } from "./content/literals";

export const Abstract: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {TEXTS.map((text, index) => (
        <Typography
          key={`text-${index}`}
          sx={{ margin: "20px", maxWidth: "70%", textAlign: "center" }}
          variant="h5"
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
};
