import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const NavBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 60px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: #00A118 
  }
`

export const NavBtn = (props) => (
  <Link to={props.to} style={{ textDecoration: 'none' }}>
    <NavBtnContainer>
      {props.children}
    </NavBtnContainer>
  </Link>
)

