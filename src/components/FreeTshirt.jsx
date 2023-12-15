import React from 'react'
import styled from "styled-components"
import bg from "../assets/freeTBg2.jpeg"
import tshirt from "../assets/tshirt.png"
import HeadCombo from '../helpers/HeadCombo'

const FreeTshirt = () => {
  return (
        <Wrapper id="freeT">
                <div className="py-24">
                        <HeadCombo heading={"Free Tshirt"} description={"Free tshirt after joining Membership program"} color={"text-white"}/>
                        <div className="image flex justify-center">
                                <img src={tshirt} alt="T-shirt" />
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

.image > img{
        margin-top: 2rem;
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
}
.image > img:hover{
        transform: scale(1.3); 
}
@media only screen and (max-width: 704px){
        .image > img{
                margin: 0 auto;
                transform: scale(0.9);
        }
        .image > img:hover{
                transform: scale(1);
        }
}
`;

export default FreeTshirt