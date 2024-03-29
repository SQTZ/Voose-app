import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importez les composants appropriés de react-router-dom

import App from "./App";
import Create from "./create";
import Createtest from "./createcopy";
import Documentation from "./documentation";
import Config from "./config";
import Soon from "./soon";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/* Utilisez le composant Routes pour définir vos routes */}
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/createtest" element={<Createtest />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/config" element={<Config />} />
        <Route path="/soon" element={<Soon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
