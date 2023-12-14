import React from 'react'
import {Card, CardBody, Typography} from "@material-tailwind/react";
import styled from "styled-components"

const TechBox = ({name}) => {
  return (
          <Wrapper>
                <Card id="card" className="mt-6 w-48 h-36 p-4 text-center shadow-2xl">
                        <div className="ml-auto mr-auto">
                                <img
                                src={`src/assets/logos/${name.toLowerCase()}.png`}
                                alt="card-image"
                                className="h-20 w-24"
                                />
                        </div>
                        <CardBody className="p-0 pt-2">
                                <Typography variant="h5" color="blue-gray" className="text-center">
                                {name}
                                </Typography>
                        </CardBody>
                </Card>
          </Wrapper>
  )
}

const Wrapper = styled.section`
        #card{
                transition: all 0.3s ease-in-out;
        }
        #card:hover{
                transform: translateY(-10px);
        }
        @media only screen and (max-width: 600px){
                #card{
                        height: 144px;
                        width: 160px;
                }
        }
`;

export default TechBox;