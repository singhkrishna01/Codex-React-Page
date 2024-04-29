import React from 'react'
import { styled } from 'styled-components';

const HeadCombo = ({heading, description, color}) => {
  return (
          <Cover>
                <header className={`text-center mx-auto mb-5 ${color}`}>
                        <h1>{heading}</h1>
                        <hr class="w-48 h-1 mx-auto my-2 bg-[#00ffff] border-0 rounded md:my-8 dark:bg-gray-700" />
                        <h3>{description}</h3>
                </header>
          </Cover>
  )
}

const Cover = styled.section`
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
      hr{
        margin-top: 1.4rem;
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

export default HeadCombo;