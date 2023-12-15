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
            <a href="#freeT">Free Tshirt</a>
          </Button>
        </div>
        {/* MASTHEAD */}
        <div className="animated-mouse">
          <a href="#tech">
            <div className="mouse-icon">
              <div className="scroller">
                <span className="visually-hidden">Scroll Button</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
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
  .mouse-icon{
    margin-left: auto;
    margin-right: auto;
    width: 3px;
    padding: 0.55rem 0.75rem;
    height: 1.5rem;
    border: white 3px solid;
    border-radius: 1.5rem;
    opacity: 0.8;
    box-sizing: content-box;
  }
  @keyframes scroll{
    0%{
      opacity: 0;
    }
    10%{
      transform: translateY(0);
      opacity: 1;
    }
    100%{
      transform: translateY(15px);
      opacity: 0;
    }
  }
  @keyframes up-down{
    0%{
      -webkit-transform: translateY(0);
    }
    100%{
      -webkit-transform: translateY(-20px);
    }
  }
  .scroller{
    width: 3px;
    height: 0.6rem;
    border-radius: 25%;
    background-color: white;
    animation-name: scroll;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0, 1.08, 0.2, 0.18);
    animation-iteration-count: infinite;
  }
  .visually-hidden{
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
  .animated-mouse{
    animation: up-down 1.5s ease-in-out infinite alternate-reverse both;
    text-align: center;
    top: 40rem; 
    position: absolute;
    width: 100%;
    left: 0;
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