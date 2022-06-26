import React, { useContext, useEffect, useState } from "react";
import Home from "./Pages/home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Single from "./Pages/single/Single";

// 'https://restcountries.com/v3.1/all
// https://restcountries.com/v2/name/peru'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path=":id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
