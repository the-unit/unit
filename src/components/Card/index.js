import React from "react"
import propTypes from "prop-types";
import CardContainer from "./CardContainer"
import CardContent from "./CardContent"

const Card = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <CardContainer className="is-half-tablet is-one-third-desktop is-12-mobile is-paddingless" image={this.props.image}>
        <CardContent {...this.props}>
        </CardContent>
      </CardContainer>
    )
  }
}

Card.propTypes = {
  image: propTypes.bool
}

export default Card