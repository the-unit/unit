import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Card from "../components/Card"
import StyleInjector from "../components/StyleInjector"

export const PartnerPostTemplate = ({ frontmatter }) => {
  return (
    <StyleInjector>
      <Card frontmatter={frontmatter}>
      </Card>
    </StyleInjector>
  )
}

PartnerPostTemplate.propTypes = {}

const PartnerPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PartnerPostTemplate post={post}> </PartnerPostTemplate>
    </Layout>
  )
}

PartnerPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PartnerPost

export const pageQuery = graphql`
    query PartnerPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            fields {
                slug
            }
            frontmatter {
                name
                subName
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