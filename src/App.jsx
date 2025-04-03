import React from "react";
import "./App.css";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contcat from "./components/Contcat";
import Blog from "./components/Blog";



function App() {
  return (
    <>
      <Header />
      <main>
      <AboutMe />
      <Projects />

      <Skills />
      <Contcat />

    
      <Blog /> 
      </main>
      <Footer />






    </>
  );
}

export default App;
