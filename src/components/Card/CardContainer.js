import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: ${props => props.image ? "256px" : "191px"};
  background-color: rgba(217,217,217,0.05);
  @media screen and (max-width: 959px) {
    margin: auto;
  }
`

export default CardContainer