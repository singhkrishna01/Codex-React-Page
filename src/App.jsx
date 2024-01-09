import React from "react"
import './App.css'
import About from "./components/About";
import About2 from "./components/About2";
import Benefits from "./components/Benefits";
import FreeTshirt from "./components/FreeTshirt";
import Header from "./components/Header";
import TechList from "./components/TechList";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"

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
      <Footer />
    </>
  )
}

export default App;
