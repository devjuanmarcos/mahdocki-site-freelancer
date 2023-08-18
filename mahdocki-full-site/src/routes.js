import Footer from "components/Footer";
import MenuClose from "components/Menu/MenuClose";
import StickyMenu from "components/Menu/StickyMenu/StickyMenu";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Assist24H from "pages/Planos/Assist24H";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <MenuClose />
        <StickyMenu />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path='about'
              element={<Home />}
            />
          </Route>
          <Route
            path='assist'
            element={<Assist24H />}
          />
          <Route
            path='posts/:id/*'
            element={<Home />}
          />
          <Route
            path='*'
            element={<Home />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
