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
        <div style={{flex: 1}}>
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
        <div style={{flex: 1}}>
          <Img fluid={this.props.event.eventImage.image.childImageSharp.fluid} style={{width: "100%"}}/>
          {/*{this.props.event.eventImage.image.childImageSharp.fluid+''}*/}
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
    eventImage: propTypes.object,
  })
}

