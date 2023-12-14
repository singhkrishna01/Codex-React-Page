import React from 'react'
import styled from "styled-components"
import TechBox from '../helpers/TechBox'

const TechList = () => {
  return (
    <Wrapper id="tech">
        <header className="text-center mx-auto mb-5">
          <h1>Material Lists</h1>
          <hr class="w-48 h-1 mx-auto my-2 bg-[#00ffff] border-0 rounded md:my-8 dark:bg-gray-700" />
          <h3>12+ technologies to be studied with more than 1000 material lists.</h3>
        </header>
        <div className="container">
          <TechBox name={"HTML"}/>
          <TechBox name={"CSS"}/> 
          <TechBox name={"JS"}/> 
          <TechBox name={"Sass"}/> 
          <TechBox name={"OpenCV"}/> 
          <TechBox name={"NPM"}/> 
          <TechBox name={"React"}/> 
          <TechBox name={"Docker"}/> 
          <TechBox name={"Firebase"}/> 
          <TechBox name={"Github"} /> 
          <TechBox name={"BootStrap"} /> 
          <TechBox name={"NodeJS"} /> 
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  padding: 2rem 5rem;
  text-align: center;
  
  h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2rem;
  }
  h3{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
  }
  .container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 1.5em;
    justify-items: center;
    margin: 0 auto;
  }
  @media only screen and (max-width: 600px){
    hr{
      width: 160px;
    }
    h1{
      font-size: 1.75rem;
    }
    h3{
      font-size: 0.9rem;
    }
  }
`;

export default TechList;