import React from "react"
import './App.css'
import About from "./components/About";
import About2 from "./components/About2";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import TechList from "./components/TechList";

function App() {

  return (
    <>
      <Header />
      <TechList />
      <About />
      <About2 />
      <Benefits />
    </>
  )
}

export default App;
