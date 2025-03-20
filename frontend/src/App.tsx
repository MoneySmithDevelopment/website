import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/Home"));
const AboutPage = React.lazy(() => import("./pages/About"));
const BlogPage = React.lazy(() => import("./pages/Blog"));

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/blog" Component={BlogPage} />
    </Routes>
  );
}

export default App;
