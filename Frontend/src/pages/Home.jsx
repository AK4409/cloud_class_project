import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <ShoppingCart/>
      <Hero />
      <About />
      <Contact />
      <Projects/>
      <Footer/>
      
    </div>
  );
}

export default Home;
