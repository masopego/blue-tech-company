import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { TEXTS } from "./content/literals";

export const Idea: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {TEXTS.map((text, index) => (
        <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
          {text}
        </Typography>
      ))}
    </Box>
  );
};
