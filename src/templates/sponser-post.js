import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Card"

export const SponserPostTemplate = ({ post }) => {
  return (
    <Card {...post} >
    </Card>
  )
}

SponserPostTemplate.propTypes = {}

const SponserPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SponserPostTemplate post={post}> </SponserPostTemplate>
    </Layout>
  )
}

SponserPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SponserPost

export const pageQuery = graphql`
    query SponserPostByID($id: String!) {
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
