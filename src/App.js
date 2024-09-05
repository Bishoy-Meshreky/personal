import React, { useEffect } from "react";
import "./assets/scss/App.scss";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import JumpArrow from "./Components/JumpUp";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      <JumpArrow />
    </div>
  );
}

export default App;

// TODO: THESE ARE FOR "multiple pages"
/* 
import React, { useEffect } from "react";
import "./assets/scss/App.scss";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
 */
