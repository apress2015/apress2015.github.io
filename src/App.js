import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import S1BPage from "./pages/boheimian/S1";
import S2BPage from "./pages/boheimian/S2";
import S3BPage from "./pages/boheimian/S3";
import S1CPage from "./pages/classic/S1";
import S2CPage from "./pages/classic/S2";
import S3CPage from "./pages/classic/S3";
import S1MPage from "./pages/modern/S1";
import S2MPage from "./pages/modern/S2";
import S3MPage from "./pages/modern/S3";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Boheimian from "./components/Boheimian";
import Classic from "./components/Classic";
import Modern from "./components/Modern";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="boheimian">
            <Route index element={<Boheimian />} />
            <Route path="style1" element={<S1BPage />} />
            <Route path="style2" element={<S2BPage />} />
            <Route path="style3" element={<S3BPage />} />
          </Route>
          <Route path="classic">
            <Route index element={<Classic />} />
            <Route path="style1" element={<S1CPage />} />
            <Route path="style2" element={<S2CPage />} />
            <Route path="style3" element={<S3CPage />} />
          </Route>
          <Route path="modern">
            <Route index element={<Modern />} />
            <Route path="style1" element={<S1MPage />} />
            <Route path="style2" element={<S2MPage />} />
            <Route path="style3" element={<S3MPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
