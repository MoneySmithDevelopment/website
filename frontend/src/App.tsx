import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  );
}

export default App;
