import React from "react";
import Error from "./page/Error"
import Home from "./page/Home"
import Layout from "./components/layoutt/Layout";
import {  Routes, Route, HashRouter } from "react-router-dom";

const Rooter = () => {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Route pour la page d'erreur */}
          <Route path="*" element={<Error />} />
          </Route>
          <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default Rooter;
