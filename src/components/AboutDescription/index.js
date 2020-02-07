import React from "react"
import propTypes from "prop-types";
import AboutDescriptionContainer from "./AboutDescriptionContainer"
import AboutDescriptionContent from "./AboutDescriptionContent"

const AboutDescription = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <AboutDescriptionContainer>
        <AboutDescriptionContent event={this.props.event}/>
      </AboutDescriptionContainer>
    )
  }
}

AboutDescription.propTypes = {
  event: propTypes.object
}

export default AboutDescription