import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from 'gatsby-image'

const CardInnerContainer = styled.div`
  width: 288px;
  //height: 144px;
  object-fit: contain;
  border-radius: 8px;
  border: solid 1px #eeeeee;
  background-color: #ffffff;
`

const FlexContainer = styled.div`
  display: flex;
`

const ImageContainer = styled.div`
  height: 104px;    
  border-radius: 7px 7px 0 0;
`

const MainHeaderContainer = styled.div`
`

const CardButtonContainer = styled(FlexContainer)`
  justify-content: flex-end;
  margin-top: ${props => props.image ? "8px" : "16px"};
  margin-right: 16px;
`

const CardLargeBtn = styled.a`
  margin-left: 4px;
  margin-bottom: ${props => props.image ? "8px" : "16px"};
  width: 72px;
  border-radius: 15px;
  border: solid 1px #979797;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  color: #323434;
  vertical-align: middle;
  line-height: 24px;
`

const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #000000;
`

const DescriptionContainer = styled.div`
  width: 256px;
  height: ${props => props.image ? "40px" : "60px"};
  margin: 7px 16px 0 16px;
  font-size: 14px;
  font-weight: 500;
  color: #323434;
  word-wrap: break-word;
  overflow: hidden;
`

const CardSmallBtn = styled(CardLargeBtn)`
  margin-bottom: ${props => props.image ? "8px" : "16px"};
  width: 32px;
`

export default class CardContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <CardInnerContainer>
        <ImageContainer style={{ display: (this.props.image)? 'block' : 'none'}}>
          {
            (this.props.image && this.props.frontmatter.logo)? <Img fluid={this.props.frontmatter.logo.childImageSharp.fluid}/> : null
          }
        </ImageContainer>
        <MainHeaderContainer>
          <TitleContainer>
            <div style={{ display: "inline-block", marginTop: "9px", marginLeft: "16px" }}>
              {this.props.frontmatter && this.props.frontmatter.name}
            </div>
            <span style={{
              display: "inline-block",
              float: "right",
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.45)",
              marginTop: "13px",
              marginRight: "16px",
              fontWeight: 500,
            }}>
              {
                (this.props.frontmatter.establishmentYear) ? `since ${this.props.frontmatter && this.props.frontmatter.establishmentYear}` : ''
              }
              </span>
          </TitleContainer>
          <DescriptionContainer image={this.props.image}>
            {this.props.frontmatter && this.props.frontmatter.introduction}
          </DescriptionContainer>
          <CardButtonContainer image={this.props.image}>
            {this.props.frontmatter && this.props.frontmatter.homepage ? (
                <CardLargeBtn href={this.props.frontmatter.homepage} target="_blank" image={this.props.image}>
                    웹페이지
                </CardLargeBtn>
              ) : <></>}
            {
              (this.props.frontmatter.facebook)?
                <CardSmallBtn>
                  f
                </CardSmallBtn> :<></>
            }
            {
              (this.props.frontmatter.medium)?
                <CardSmallBtn>
                  m
                </CardSmallBtn> :<></>
            }
          </CardButtonContainer>
        </MainHeaderContainer>
      </CardInnerContainer>
    )
  }
}

CardContent.propTypes = {
  frontmatter: PropTypes.shape({
    name: PropTypes.string,
    establishmentYear: PropTypes.number,
    introduction: PropTypes.string,
    homepage: PropTypes.string,
    facebook: PropTypes.string,
    medium: PropTypes.string,
    logo: PropTypes.string
  }),
  image: PropTypes.bool
}