import React from "react"
import styled from "styled-components"
import propTypes from "prop-types"
import Img from 'gatsby-image'

const AboutDescriptionContentDiv = styled.div`
  display: flex;
`

export default class AboutDescriptionContent extends React.Component {
  constructor(props) {
    super(props)
    console.log('decs props', props)
    this.state = {}

  }

  render() {
    return (
      <AboutDescriptionContentDiv>
        <div>
          <div>
            {this.props.event.title}
          </div>
          <div>
            {this.props.event.title_kr} | {this.props.event.date}
          </div>
          <div>
            {this.props.event.description}
          </div>
        </div>
        <div>
          <Img fluid={this.props.event.image.childImageSharp.fluid}/>
        </div>
      </AboutDescriptionContentDiv>
    )
  }
}

AboutDescriptionContent.propTypes = {
  event: propTypes.shape({
    title: propTypes.string,
    title_kr: propTypes.string,
    date: propTypes.string,
    description: propTypes.string,
    eventImage: propTypes.string,
  })
}

