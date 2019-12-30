import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  background-color: #003303;
  height: 120px;
  color: #ffffff;
`

export default class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear()
    return (
      <FooterContainer className="columns is-marginless is-vcentered is-centered">
        <div className="column is-paddingless">
          <div className='is-center' style={{ width: '211px', margin: 'auto', fontSize: '14px'}}>
            Design by QURIAN, Philographer<br/>
            <a href="mailto: contact@unit.center">contact@unit.center</a>
          </div>
        </div>
        <div className="column is-paddingless">

        </div>
        <div className="column is-paddingless" style={{ fontSize: "18px" }}>
          Copyright © UNIT {currentYear}
        </div>
      </FooterContainer>
    )
  }
}