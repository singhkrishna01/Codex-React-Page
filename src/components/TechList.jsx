import React from 'react'
import styled from "styled-components"
import HeadCombo from '../helpers/HeadCombo'
import TechBox from '../helpers/TechBox'
import html from "../assets/logos/html.png"
import css from "../assets/logos/css.png"
import js from "../assets/logos/js.png"
import sass from "../assets/logos/sass.png"
import opencv from "../assets/logos/opencv.png"
import npm from "../assets/logos/npm.png"
import react from "../assets/logos/react.png"
import docker from "../assets/logos/docker.png"
import firebase from "../assets/logos/firebase.png"
import github from "../assets/logos/github.png"
import bootstrap from "../assets/logos/bootstrap.png"
import nodejs from "../assets/logos/nodejs.png"

const TechList = () => {
  return (
    <Wrapper id="tech">
        <HeadCombo heading={"Material Lists"} description={"12+ technologies to be studied with more than 1000 material lists."} />
        <div className="container">
          <TechBox name={"HTML"} img={<img src={html} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"0"}/>
          <TechBox name={"CSS"} img={<img src={css} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"150"}/> 
          <TechBox name={"JS"} img={<img src={js} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"300"}/> 
          <TechBox name={"Sass"} img={<img src={sass} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"450"}/> 
          <TechBox name={"OpenCV"} img={<img src={opencv} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"600"}/> 
          <TechBox name={"NPM"} img={<img src={npm} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"750"}/> 
          <TechBox name={"React"} img={<img src={react} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"900"}/> 
          <TechBox name={"Docker"} img={<img src={docker} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"1050"}/> 
          <TechBox name={"Firebase"} img={<img src={firebase} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"1200"}/> 
          <TechBox name={"Github"} img={<img src={github} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"1350"}/> 
          <TechBox name={"BootStrap"} img={<img src={bootstrap} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"1500"}/> 
          <TechBox name={"NodeJS"} img={<img src={nodejs} alt="card-image" className="h-20 w-24"/>} anim={"fade-up"} del={"1750"}/> 
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 5.5rem 5rem;
  text-align: center;

  .container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 1.5em;
    justify-items: center;
    margin: 0 auto;
  }
`;

export default TechList;