import "./App.css";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Element } from "react-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import React from "react";
import ScrollToTopButton from "./assets/button/Scrollbtn";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contactme";
import Footer from "./pages/Footer";
import Tictactoe from "./pages/projects/tictactoe";
import Sefactory from "./pages/projects/sefactory";
import Weatherapp from "./pages/projects/Weatherapp";

function App() {
  return (
    <BrowserRouter>
      <Element>
        <Navbar />
        <Home />

        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="/sefactory" element={<Sefactory />} />{" "}
          <Route path="/weatherapp" element={<Weatherapp />} />
        </Routes>
        <AboutMe />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </Element>
    </BrowserRouter>
  );
}

export default App;
