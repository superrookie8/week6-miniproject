import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../src/pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
