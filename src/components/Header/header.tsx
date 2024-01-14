import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { NavBar } from "../NavBar/navBar";

import { ROUTES } from "../../constants/routes";

export const Header: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#5271FF",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <Typography component="h1" variant="h2" sx={{ color: "white" }}>
        <Link to={ROUTES.HOME}>
          Blue Tech<span>.</span>
        </Link>
      </Typography>
      <NavBar />
    </Box>
  );
};
