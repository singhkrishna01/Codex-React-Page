import React from 'react'
import bg from "../assets/headerBg-blur.png"
import styled from "styled-components"
import { Button } from "@material-tailwind/react";
import { MaterialNavbar } from './MaterialNavbar';

const Header = () => {
  return (
    <Wrapper>
      <MaterialNavbar/>
      <div className="container">
        <h1 className="mb-3">CODING COURSE</h1>
        <h3>A place to learn programming & various other technologies,<br/> specifically and intensively in only one platform.</h3>
        {/* BUTTONS */}
        <div>
          <Button id="btn" variant="gradient" size="sm" className="p-4 mx-4 text-black text-base bg-[#00FFFF]">
              JOIN NOW
          </Button>
          <Button id="btn" variant="gradient" size="sm" className="p-4 mx-4 text-black text-base bg-[#FFFFFF]">
            FREE T-SHIRT
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh; 
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 17rem 0;
    color: white;
    margin: auto;
  }
  .container h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 3rem;
  }
  .container h3{
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  @media only screen and (max-width: 600px){
    .container h1{
      font-size: 2rem;
    }
    .container h3{
      font-size: 1rem;
    }
    #btn{
      padding: 0.8rem;
      margin: 0.5rem;
    }
  }
`;

export default Header