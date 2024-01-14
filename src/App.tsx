import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/welcome";
import { Board } from "./pages/Board/board";
import { AboutUs } from "./pages/AboutUs/aboutUs";
import { Environment } from "./pages/Environment/environment";
import { ROUTES } from "./constants/routes";
import { Dafo } from "./pages/Dafo/dafo";
import { Strategy } from "./pages/Strategy/strategy";
import { Product } from "./pages/Product/product";
import { Price } from "./pages/Price/price";
import { Supply } from "./pages/Supply/supply";
import { Communication } from "./pages/Communication/communication";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Welcome />} />
        <Route path={ROUTES.BOARD} element={<Board />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.ENVIRONMENT} element={<Environment />} />
        <Route path={ROUTES.DAFO} element={<Dafo />} />
        <Route path={ROUTES.STRATEGY} element={<Strategy />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route path={ROUTES.PRICE} element={<Price />} />
        <Route path={ROUTES.SUPPLY} element={<Supply />} />
        <Route path={ROUTES.COMMUNICATION} element={<Communication />} />
      </Routes>
    </Router>
  );
};
