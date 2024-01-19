import React from "react";

import { Box } from "@mui/material";

import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { ThreatenList } from "./components/ThreatenList/threatenList";
import { WeaknessList } from "./components/WeaknessList/weaknessList";
import { ChanceList } from "./components/ChanceList/chanceList";
import { StrengthList } from "./components/StrengthList/strengthList";

export const Dafo: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "40px",
          p: "0px 20px",
        }}
      >
        <ThreatenList />
        <WeaknessList />
        <ChanceList />
        <StrengthList />
      </Box>
      <Footer />
    </>
  );
};
