import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/Home"));
const AboutPage = React.lazy(() => import("./pages/About"));
const BlogPage = React.lazy(() => import("./pages/Blog"));
const DeleteAccountPage = React.lazy(() => import("./pages/Delete"));
const Privacy_Policy = React.lazy(() => import("./pages/Privacy_Policy"));

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/blog" Component={BlogPage} />
      <Route path="/delete-account" Component={DeleteAccountPage} />
      <Route path="/privacy-policy" Component={Privacy_Policy} />
    </Routes>
  );
}

export default App;
