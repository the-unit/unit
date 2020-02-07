import React from "react"
import PropTypes from "prop-types"

import Layout from "../../components/Layout"
import DetailTitleContainer from "../../components/Detail/DetailTitleContainer"
import DetailContent from "../../components/Detail/DetailContent"
import SearchBar from "../../components/SearchBar"
import SponsorRoll from "../../components/SponsorRoll"
import CardContent from "../../components/Card/CardContent"
import AboutDescription from "../../components/AboutDescription"

export default class AboutUsPage extends React.Component {
  constructor(props) {
    super(props);
    console.log('props is!!!!!!1', props)
  }
  render() {
    return (
      <Layout>
        <div
          className="margin-top-0"
          style={{
            height: "240px",
            backgroundColor: "#00a118",
            color: "white",
          }}
        >
          <div style={{
            paddingTop: "48px",
            paddingLeft: "48px",
          }}>
            <DetailTitleContainer style={{ width: "107px" }}>
              {this.props.frontmatter.mainHeader}
            </DetailTitleContainer>
            <DetailContent style={{
              paddingTop: "43px",
            }}>
              <div>
                {this.props.frontmatter.mainDescription1}
              </div>
              <div>
                {this.props.frontmatter.mainDescription2}
              </div>
            </DetailContent>
          </div>
        </div>
        <section className="section section-bg-color is-paddingless" style={{
          marginBottom: "50px",
        }}>
          <div>
            {this.props.frontmatter.subHeader}
          </div>
          <div>
            {this.props.frontmatter.subDescription}
          </div>
          <div>
            {this.props.frontmatter.link}
          </div>
          <AboutDescription event={this.props.frontmatter.firstEvent}/>
          <AboutDescription event={this.props.frontmatter.secondEvent}/>
          <AboutDescription event={this.props.frontmatter.thirdEvent}/>
        </section>
      </Layout>
    )
  }
}

AboutUsPage.propTypes = {
  frontmatter: PropTypes.shape({
    templateKey: PropTypes.string,
    mainHeader: PropTypes.string,
    mainDescription1: PropTypes.string,
    mainDescription2: PropTypes.string,
    subHeader: PropTypes.string,
    subDescription: PropTypes.string,
    link: PropTypes.string,
    firstEvent: PropTypes.object,
    secondEvent: PropTypes.object,
    thirdEvent: PropTypes.object,
    lastDescription: PropTypes.string,
  })
}