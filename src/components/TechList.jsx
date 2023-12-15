import React from 'react'
import styled from "styled-components"
import HeadCombo from '../helpers/HeadCombo'
import TechBox from '../helpers/TechBox'

const TechList = () => {
  return (
    <Wrapper id="tech">
        <HeadCombo heading={"Material Lists"} description={"12+ technologies to be studied with more than 1000 material lists."} />
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