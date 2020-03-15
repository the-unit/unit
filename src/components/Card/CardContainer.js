import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: ${props => props.image ? "256px" : "191px"};
  background-color: white;
`

export default CardContainer