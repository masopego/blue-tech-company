import * as React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { TEXTS } from "./content/literals";
import img from "./content/workSpace.jpeg";

export const Localization: React.FC = () => {
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
      <img src={img} alt="Work Space" width={700} />
    </Box>
  );
};
