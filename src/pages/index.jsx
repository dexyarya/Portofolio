import React from "react";
import Navbar from "../Navbar";
import Herosection from "../Herosection";
import About from "../About";
import Skill from "../Skill";
import Contact from "../Contact";
function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Skill />
      <Contact />
    </>
  );
}

export default Home;
