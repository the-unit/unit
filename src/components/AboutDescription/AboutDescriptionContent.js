  import React from "react"
import styled from "styled-components"
import propTypes from "prop-types"
import Img from 'gatsby-image'

const AboutDescriptionContentDiv = styled.div`
  display: flex;
  flex: 1;
  @media screen and (max-width: 959px) {
    flex-direction: column-reverse;
  }
`

const FlexColumn = styled.div`
  flex: 1;
  @media screen and (max-width: 959px) {
    flex: 0;
    width: 100%;
  }
`

const EventHeader = styled.div`
  margin-top: 28px;
  margin-left:48px;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  color: black;
`

const EventDescription = styled.div`
  margin-left:48px;
  margin-right:40px;
  font-size: 16px;
  color: black;
  @media screen and (max-width: 959px) {
    margin-bottom: 24px;
  } 
`

export default class AboutDescriptionContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <AboutDescriptionContentDiv>
        <FlexColumn style={{flex: 1}}>
          <EventHeader>
            {this.props.event.title}
          </EventHeader>
          <EventDescription>
            {this.props.event.title_kr} | {this.props.event.date} <br/>
            {this.props.event.description}
          </EventDescription>
        </FlexColumn>
        <FlexColumn style={{flex: 1 }}>
          <div style={{ padding: "7.5%" }}>
            <Img fluid={this.props.event.eventImage.image.childImageSharp.fluid}/>
          </div>
        </FlexColumn>
      </AboutDescriptionContentDiv>
    )
  }
}

AboutDescriptionContent.propTypes = {
  event: propTypes.shape({
    title: propTypes.string,
    title_kr: propTypes.string,
    summary: propTypes.string,
    date: propTypes.string,
    description: propTypes.string,
    eventImage: propTypes.object,
  })
}

