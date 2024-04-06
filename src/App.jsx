import { useState } from "react";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
