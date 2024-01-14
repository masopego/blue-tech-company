import * as React from "react";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import img from "./content/founders.jpeg";

import { TEXTS } from "./content/literals";

export const Creators: React.FC = () => {
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
      <Avatar
        alt="Remy Sharp"
        src={img}
        sx={{ width: 300, height: 300, borderRadius: "20%" }}
      />
      {TEXTS.map((text, index) => (
        <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
          {text}
        </Typography>
      ))}
    </Box>
  );
};
