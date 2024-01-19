import React from "react";

import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { Cards } from "./components/Cards/cards";
import { Abstract } from "./components/Abstract/abstract";

export const Board: React.FC = () => (
  <>
    <Header />
    <Abstract />
    <Cards />
    <Footer />
  </>
);
