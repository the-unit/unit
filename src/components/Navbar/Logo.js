import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"


const LogoContainer = styled.div`
  margin-left: 15px;
`

const Img = styled.img`
  width: 90px;
`

const LogoImg = (props) => (
  <Link to={props.to}>
    <Img src={logo_white}/>
  </Link>
);

export const Logo = (props) => (
 <LogoContainer>
   <LogoImg to={props.to} />
 </LogoContainer>
)