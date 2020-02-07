import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import AboutDescription from "../../components/AboutDescription"
import Layout from "../../components/Layout"
import DetailTitleContainer from "../../components/Detail/DetailTitleContainer"
import DetailContent from "../../components/Detail/DetailContent"
import { graphql, StaticQuery } from "gatsby"

const SubHeaderContainer = styled.div`
  height: 48px;
  font-size: 21px;
  font-weight: bold;
  color: #000000;
`

const BlockContainer = styled.div`
  width: 100%;
  height: 256px;
`

const AboutUsPage = ({
                       data: {
                         markdownRemark: { frontmatter },
                       },
                     }) => (
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
          {frontmatter.mainHeader}
        </DetailTitleContainer>
        <DetailContent style={{
          paddingTop: "43px",
        }}>
          <div>
            {frontmatter.mainDescription1}
          </div>
          <div>
            {frontmatter.mainDescription2}
          </div>
        </DetailContent>
      </div>
    </div>
    <section className="section section-bg-color is-paddingless" style={{
      marginBottom: "50px",
    }}>
      <BlockContainer>
        <SubHeaderContainer>
          {frontmatter.subHeader}
        </SubHeaderContainer>
        <div>
          {frontmatter.subDescription}
        </div>
        <div>
          {frontmatter.link}
        </div>
      </BlockContainer>
      <AboutDescription event={frontmatter.firstEvent}/>
      <AboutDescription event={frontmatter.secondEvent}/>
      <AboutDescription event={frontmatter.thirdEvent}/>
    </section>
  </Layout>
)

export default AboutUsPage

AboutUsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
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
      }),
    }),
  }),
}

export const AboutUsPageQuery = <StaticQuery query={graphql`
    query AboutUsPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "about-us-page" } }) {
            frontmatter {
                mainHeader
                mainDescription1
                mainDescription2
                subHeader
                subDescription
                link
                firstEvent {
                    title
                    title_kr
                    date
                    description
                    eventImage {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 480, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                secondEvent {
                    title
                    title_kr
                    date
                    description
                    eventImage {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 480, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                thirdEvent {
                    title
                    title_kr
                    date
                    description
                    eventImage {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 480, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                lastDescription
            }
        }
    }
`
}/>
