import React from 'react'
import {Card, CardBody, Typography} from "@material-tailwind/react";
import styled from "styled-components"

const TechBox = (props) => {
  return (
          <Wrapper>
                <Card id="card" className="mt-6 w-48 h-36 p-4 text-center shadow-2xl" data-aos={`${props.anim}`} data-aos-delay={`${props.del}`} data-aos-duration={"1000"} data-aos-offset={"75"}>
                        <div className="ml-auto mr-auto">
                                {props.img}
                        </div>
                        <CardBody className="p-0 pt-2">
                                <Typography variant="h5" color="blue-gray" className="text-center">
                                {props.name}
                                </Typography>
                        </CardBody>
                </Card>
          </Wrapper>
  )
}

const Wrapper = styled.section`
        #card:hover{
                transition: all 0.1s ease-in;
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