import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Card from "../components/Card"
import StyleInjector from "../components/StyleInjector"


export const SponsorPostTemplate = ({ frontmatter }) => {
  return (
    <StyleInjector>
      <Card frontmatter={frontmatter} >
      </Card>
    </StyleInjector>
  )
}

SponsorPostTemplate.propTypes = {}

const SponsorPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SponsorPostTemplate post={post}> </SponsorPostTemplate>
    </Layout>
  )
}

SponsorPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SponsorPost

export const pageQuery = graphql`
    query SponsorPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            excerpt(pruneLength: 400)
            id
            fields {
                slug
            }
            frontmatter {
                name
                subName
                dept
                establishmentYear
                slogan
                introduction
                location
                email
                homepage
                templateKey
                date(formatString: "MMMM DD, YYYY")
                logo {
                    childImageSharp {
                        fluid(maxWidth: 120, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
