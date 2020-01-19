import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"

export const NavBtn = (props) => (
  <Location>
    {({ location }) =>
      (<div style={{
        backgroundColor: (location.pathname === props.to)? '#00a118' : '#186f25',
        height: '60px'
      }}>
        <Link to={props.to} className="navbar-item" activeClassName={"hoverNavBtn"}>
            <span style={{ textAlign: "center", width: "100%"}}>
              {props.children}
            </span>
        </Link>
      </div>)
    }
  </Location>
)

