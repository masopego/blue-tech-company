import React from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        padding: "10px",
      }}
    >
      <Typography component="h4">&copy;{currentYear} Blue Tech</Typography>
      <Typography component="h5">Made with 💛 by Marisol Peña</Typography>
    </Box>
  );
};
