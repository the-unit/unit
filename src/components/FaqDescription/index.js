import React from "react"
import propTypes from "prop-types";
import FaqDescriptionContainer from "./FaqDescriptionContainer"
import FaqDescriptionContent from "./FaqDescriptionContent"

const FaqDescription = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <FaqDescriptionContainer>
        <FaqDescriptionContent faq={this.props.faq}/>
      </FaqDescriptionContainer>
    )
  }
}

FaqDescription.propTypes = {
  faq: propTypes.object
}

export default FaqDescription