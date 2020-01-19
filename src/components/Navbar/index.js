import React from "react"

import { Link } from "gatsby"
import logo_white from "../../../static/img/logo_white.png";
import { NavBtn } from "./NavBtn"

const Index = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          })
      },
    )
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{ height: '60px' }}>
        <div className="navbar-brand" style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            <Link to="/">
              <div style={{ width: '90px', marginLeft: '15px' }}>
                <img src={logo_white} alt={'logo'}/>
              </div>
            </Link>
          <a role="button" className={`navbar-burger burger ${this.state.navBarActiveClass}`} aria-label="menu" aria-expanded="false"
             data-target="navbarTarget" onClick={() => this.toggleHamburger()}>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>
        <div id="navbarTarget" className={`navbar-menu is-paddingless ${this.state.navBarActiveClass}`}>
          <div className="navbar-start" style={{ flexGrow: 1 }}>
          </div>
          <div className="navbar-end">
            <NavBtn to="/aboutus">
                About Us
            </NavBtn>
            <NavBtn to="/partner">
              <span>
                Partner
              </span>
            </NavBtn>
            <NavBtn to="/sponsor">
              Sponsor
            </NavBtn>
            <NavBtn to="/contact">
              Contact
            </NavBtn>
          </div>
        </div>
      </nav>
    )
  }
}

export default Index