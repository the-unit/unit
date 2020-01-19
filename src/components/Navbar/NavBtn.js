import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Location } from '@reach/router'

export const NavBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 60px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  background-color: ${props => props.to === props.pathname  ? "#00A118" : ""};
  &:hover {
    background-color: #00A118 
  }
`

export const NavBtn = (props) => (
  <Link to={props.to} style={{ textDecoration: 'none' }}>
    <Location>
      {({ location }) => {
        return (<NavBtnContainer pathname={location.pathname} to={props.to}>
          {props.children}
        </NavBtnContainer>)
      }}
    </Location>
  </Link>
)

