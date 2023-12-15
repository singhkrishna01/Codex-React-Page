import React from 'react'
import styled from "styled-components"
import HeadCombo from '../helpers/HeadCombo';

const Testimonials = () => {
  return (
    <Wrapper>
            <HeadCombo heading={"Testimonials"} description={"More than 10.000 positive testimonial from our members."} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
        padding: 5rem;
`;

export default Testimonials;