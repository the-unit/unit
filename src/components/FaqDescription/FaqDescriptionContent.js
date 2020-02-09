import React from "react"
import styled from "styled-components"
import propTypes from "prop-types"


const FaqDescriptionContentDiv = styled.div`
`

const FaqDescriptionTitleContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 48px;
  font-size: 21px;
  font-weight: bold;
  color: #000000;
`
const FaqDescriptionContentContainer = styled.div`
  width: 100%;
  margin-top: 4px;
  margin-left: 48px;
  font-size: 16px;
  color: #000000;
`

export default class FaqDescriptionContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <FaqDescriptionContentDiv>
        <FaqDescriptionTitleContainer>
          {this.props.faq.title}
        </FaqDescriptionTitleContainer>
        <FaqDescriptionContentContainer>
          {this.props.faq.description1}
        </FaqDescriptionContentContainer>
        <FaqDescriptionContentContainer>
          {this.props.faq.description2}
        </FaqDescriptionContentContainer>
      </FaqDescriptionContentDiv>
    )
  }
}

FaqDescriptionContent.propTypes = {
  faq: propTypes.shape({
    title: propTypes.string,
    description1: propTypes.string,
    description2: propTypes.string,
  }),
}

