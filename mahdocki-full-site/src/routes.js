import Footer from "components/Footer";
import Menu from "components/Menu";
import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />

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
