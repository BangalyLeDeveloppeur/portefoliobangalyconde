import React from "react";
import Error from "./page/Error"
import Home from "./page/Home"
import Layout from "./components/layoutt/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Route pour la page d'erreur */}
          <Route path="*" element={<Error />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
