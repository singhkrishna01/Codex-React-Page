import React from 'react'
import styled from "styled-components"
import {Button} from "@material-tailwind/react"

const About2 = () => {
  return (
    <Wrapper id="about2">
            <div className="container">
                <div className="Info">
                        <h1>Learning with a Mentor</h1>
                        <h3>The teaching team will assist specifically and intensively so that if participants experience obstacles in learning will be personally assisted directly.</h3>
                        <Button id="btn" variant="gradient" size="sm" className="text-black text-base bg-[#00FFFF]  font-medium normal-case">
                                What's our Benefit?
                        </Button>
                </div>
                <div className="image">
                        <img src="src/assets/course2.png" alt="Guy Doing Coding" />
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
                margin-top: 4.5rem;
        }
        .image{
                margin: 0 2rem;
                transform: scale(1.2);
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
        @media (max-width: 1016px){
                .image{
                        transform: scale(1);
                }
                .Info{
                        margin-left: 2rem;
                }
        }
        @media (max-width: 604px){
                .container{
                        flex-direction: column-reverse;
                        align-items: center;
                        margin-top: 0;
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

export default About2;