import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/Home";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <HomePage />
        <About />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
