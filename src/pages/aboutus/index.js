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
  padding: 28px 84px 24px 48px;
`

const LinkContainer = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #00a300;
`

const LastDescriptionContainer = styled.div`
  width: 811px;
  height: 176px;
  @media screen and (max-width: 959px) {
    width: auto;
    height: auto;
  }
  margin: 24px 101px 16px 48px;
  font-size: 16px;
  color: #000000;
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
      marginBottom: "24px",
    }}>
      <BlockContainer>
        <SubHeaderContainer>
          {frontmatter.subHeader}
        </SubHeaderContainer>
        <div>
          {frontmatter.subDescription}
        </div>
        <LinkContainer>
          <a className="hover-green" href={frontmatter.link}>{frontmatter.linkName}</a>
        </LinkContainer>
      </BlockContainer>
      <AboutDescription event={frontmatter.firstEvent}/>
      <AboutDescription event={frontmatter.secondEvent}/>
      <AboutDescription event={frontmatter.thirdEvent}/>
    </section>
    <section className="section section-bg-color is-paddingless" style={{
      marginBottom: "24px",
    }}>
      <LastDescriptionContainer>
        {frontmatter.lastDescription}
      </LastDescriptionContainer>
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
        linkName: PropTypes.string,
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
                linkName
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
