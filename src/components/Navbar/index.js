import React from "react"
import { Nav } from "./Nav"
import { NavBtn } from "./NavBtn"
import { Logo } from "./Logo"

const Index = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Nav>
        <Logo to={"/"}/>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <NavBtn to="/">
            Home
          </NavBtn>
          <NavBtn to="/partner">
            Partner
          </NavBtn>
          <NavBtn to="/sponser">
            Sponser
          </NavBtn>
          <NavBtn to="/faq">
            FAQ
          </NavBtn>
          <NavBtn to="/contact">
            Contact
          </NavBtn>
        </div>
      </Nav>
    )
  }
}

export default Index
