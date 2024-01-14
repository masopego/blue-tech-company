import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "../../components/Button/button";

import { ROUTES } from "../../constants/routes";

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(ROUTES.BOARD);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5271FF",
      }}
    >
      <Typography component="h1" variant="h1" sx={{ color: "white" }}>
        <Link to={ROUTES.HOME}>
          Blue Tech<span>.</span>
        </Link>
      </Typography>

      <Button onClick={handleNavigation}>Descubre más sobre nosotros</Button>
    </Box>
  );
};
