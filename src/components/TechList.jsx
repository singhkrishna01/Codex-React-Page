import React from 'react'
import styled from "styled-components"

const TechList = () => {
  return (
    <Wrapper>
            <h1>Material List</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export default TechList;