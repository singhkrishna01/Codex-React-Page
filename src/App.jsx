import React from "react"
import './App.css'
import About from "./components/About";
import About2 from "./components/About2";
import Benefits from "./components/Benefits";
import FreeTshirt from "./components/FreeTshirt";
import Header from "./components/Header";
import TechList from "./components/TechList";
import Testimonials from "./components/Testimonials";

function App() {

  return (
    <>
      <Header />
      <TechList />
      <About />
      <About2 />
      <Benefits />
      <FreeTshirt />
      <Testimonials />
    </>
  )
}

export default App;
