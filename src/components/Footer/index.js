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
      <FooterContainer className="columns is-desktop is-tablet is-marginless is-vcentered is-centered minimize-on-mobile">
        <div className="column is-paddingless no-grow-on-mobile">
          <div className='is-center' style={{ width: '211px', margin: 'auto', fontSize: '14px'}}>
            Design by QURIAN, Philographer<br/>
            <a href="mailto: contact@unit.center">contact@unit.center</a>
          </div>
        </div>
        <div className="column is-paddingless hide-on-mobile">
        </div>
        <div className="column is-paddingless no-grow-on-mobile" style={{ fontSize: "18px" }}>
          <div className='is-center' style={{ width: '211px', margin: 'auto', fontSize: '14px'}}>
            Copyright © UNIT {currentYear}
          </div>
        </div>
      </FooterContainer>
    )
  }
}