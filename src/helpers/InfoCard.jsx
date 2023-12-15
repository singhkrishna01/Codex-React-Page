import React from 'react'
import styled from "styled-components"


const InfoCard = ({heading, description, icon}) => {
        console.log(icon)
  return (
    <Cover id="InfoCard">
            <div className="card shadow-2xl px-8 rounded-2xl h-28">
                {/* LOGO + HEADING */}
                <div className="keyPoint mb-1">
                        {icon}
                        <h2 className="text-xl mx-4 text-center font-medium text-[#6B7280]">{heading}</h2>
                </div>
                {/* DESCRIPTION */}
                <div className="descrip mx-0 px-0">
                        <p>{description}</p>
                </div>
            </div>
    </Cover>
  )
}

const Cover = styled.section`
        .card{
                flex: 0 0 auto;
                margin: 2rem;
                transition: all 0.3s ease-in-out;
        }
        .card:hover{
                transform: translateY(-10px);
        }
        .keyPoint{
                display: flex;
                align-items: center;
        }
        .keyPoint > h2{
                color: #4b5563;
        }
        .descrip > p{
                line-height: 1.6rem;
                font-size: 1.1rem;
                color: #6B7280;
        }
        @media only screen and (max-width: 1440px){
                .card{
                        padding: 0;
                        padding-left: 1rem;
                }
                .keyPoint h2{
                        font-size: 1.125rem; /* 18px */
                        line-height: 1.75rem; /* 28px */
                }
                .descrip p{
                        font-size: 1rem;
                }
        }
        @media only screen and (max-width: 1024px){
                .keyPoint h2{
                        font-size: 1rem; /* 16px */
                        line-height: 1.5rem; /* 24px */
                }
                .descrip p{
                        font-size: 0.8rem;
                }
        }
        @media only screen and (max-width: 780px){
                .card{
                        width: 30rem;;
                }
                .keyPoint h2{
                        font-size: 1.2rem; /* 16px */
                        line-height: 1.2rem; /* 24px */
                }
                .descrip p{
                        font-size: 1rem;
                }
        }
        @media only screen and (max-width: 502px){
                .card{
                        width: 16rem;
                }
                .keyPoint h2{
                        font-size: 1.05rem; /* 14px */
                        line-height: 1.25rem; /* 20px */
                }
                .descrip p{
                        font-size: 0.8rem;
                }
        }
`;

export default InfoCard