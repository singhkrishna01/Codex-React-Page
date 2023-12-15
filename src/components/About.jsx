import React from 'react'
import styled from "styled-components"
import {Button} from "@material-tailwind/react"
import { FaPaperPlane } from "react-icons/fa6";

const About = () => {
  return (
    <Wrapper id="about">
            <div className="container">
                <div className="image">
                        <img src="src/assets/course1.png" alt="Guy Doing Coding" />
                </div>
                <div className="Info">
                        <h1>Get access to learning</h1>
                        <h3>Each participant will get an account before learning begins which will be used to access learning material that is in the Onekit website.</h3>
                        <Button id="btn" variant="gradient" size="sm" className="text-black text-base bg-[#00FFFF]  font-medium normal-case">
                                <FaPaperPlane size={15} style={{marginRight: "7px"}}/> Try for Free
                        </Button>
                </div>
            </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;

        .container{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                margin-top: 4rem;
        }
        .image{
                margin: 0 2rem;
        }
        .Info{
                width: 40%;
        }
        .Info > h1{
                font-size: 2.25rem;
                font-weight: 500;
                color: #4b5563;
                margin-bottom: 1.5rem;
        }
        .Info > h3{
                font-size: 1.25rem;
                font-weight: 400;
                color: #4b5563;
                margin-bottom: 1.5rem;
        }
        .Info > #btn{
                display: flex;
                justify-content: center;
                align-items: center;
        }
        @media (max-width: 604px){
                .container{
                        flex-direction: column;
                        align-items: center;
                }
                .image{
                        transform: scale(0.8);
                }
                .Info{
                        margin: 2rem auto;
                        width: 70%;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                }
                .Info > h1{
                        font-size: 1.8rem;
                }
                .Info > h3{
                        font-size: 1rem;
                }
        }
`;

export default About;