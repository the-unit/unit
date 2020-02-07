import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import StyleInjector from "../components/StyleInjector"
import AboutUsPage from "../pages/aboutus/index"

export const AboutUsPostTemplate = ({ frontmatter }) => {
  return (
    <StyleInjector>
      <AboutUsPage frontmatter={frontmatter}/>
    </StyleInjector>
  )
}

AboutUsPostTemplate.propTypes = {}

const AboutUsPost = ({ data }) => {
  const { markdownRemark: {frontmatter} } = data
  console.log('frontmatter is', frontmatter);

  return (
    <AboutUsPostTemplate frontmatter={frontmatter}> </AboutUsPostTemplate>
  )
}

AboutUsPost.propTypes = {
  aboutUs: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutUsPost

export const aboutUsPostQuery = graphql`
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
                                fluid(maxWidth: 2048, quality: 100) {
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
                                fluid(maxWidth: 2048, quality: 100) {
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
                                fluid(maxWidth: 2048, quality: 100) {
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