import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IntroPage from "./pages/IntroPage";
import InfoPlace from "./pages/InfoPlace";
import Map from "./pages/Map";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/infoplace" element={<InfoPlace />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
