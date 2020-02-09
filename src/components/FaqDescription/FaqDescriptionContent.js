import React from "react"
import styled from "styled-components"
import propTypes from "prop-types"


const FaqDescriptionContentDiv = styled.div`
`

const FaqDescriptionTitleContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-left: 48px;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`
const FaqDescriptionContentContainer = styled.div`
  width: 100%;
  margin-top: 4px;
  padding-left: 48px;
  font-size: 14px;
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

