import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
