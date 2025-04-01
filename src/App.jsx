import React from "react";
import "./App.css";
import Header from "./components/Header"; // Import the Header Component
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contcat from "./components/Contcat";



function App() {
  return (
    <>
      <Header />
      <main>
      <AboutMe />
      <Projects />

      <Skills />
      <Contcat />

    
        
      </main>
      <Footer />






    </>
  );
}

export default App;
