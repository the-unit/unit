import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

import Card from "../components/Card"

export const PartnerPostTemplate = (post) => {
  return (
    <Card {...post} >
    </Card>
  )
}

PartnerPostTemplate.propTypes = {

}

const PartnerPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PartnerPostTemplate
        name={post.frontmatter.name}
        subName={post.frontmatter.subName}
        establishmentYear={post.frontmatter.establishmentYear}
        slogan={post.frontmatter.slogan}
        introduction={post.frontmatter.introduction}
        location={post.frontmatter.location}
        email={post.frontmatter.email}
        homepage={post.frontmatter.homepage}
        date={post.frontmatter.date}
        logo={post.frontmatter.logo}
      />
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