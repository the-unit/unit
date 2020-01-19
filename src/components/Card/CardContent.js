import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const CardInnerContainer = styled.div`
  width: 288px;
  //height: 144px;
  object-fit: contain;
  border-radius: 8px;
  border: solid 1px #eeeeee;
  background-color: #ffffff;
  //padding: 14px 16px 9px 16px;
`

const FlexContainer = styled.div`
  display: flex;
`

const MainHeaderContainer = styled.div`
`

const CardButtonContainer = styled(FlexContainer)`
  justify-content: flex-end;
  margin-top: 16px;
  margin-right: 16px;
`

const CardLargeBtn = styled.a`
  margin-left: 4px;
  margin-bottom: 16px;
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
  height: 60px;
  margin: 7px 16px 0 16px;
  font-size: 14px;
  font-weight: 500;
  color: #323434;
  word-wrap: break-word;
  overflow: hidden;
`

const CardSmallBtn = styled(CardLargeBtn)`
  margin-bottom: 16px;
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
                since {this.props.frontmatter && this.props.frontmatter.establishmentYear}
              </span>
          </TitleContainer>
          <DescriptionContainer>
            {this.props.frontmatter && this.props.frontmatter.introduction}
          </DescriptionContainer>
          <CardButtonContainer>
            {this.props.frontmatter.homepage ? (
                <CardLargeBtn href={this.props.frontmatter.homepage} target="_blank">
                    웹페이지
                </CardLargeBtn>
              ) : <></>}
            <CardSmallBtn>
              f
            </CardSmallBtn>
            <CardSmallBtn>
              m
            </CardSmallBtn>
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
  }),
}