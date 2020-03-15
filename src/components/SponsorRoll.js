import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import Card from "./Card"

const Roll = styled.div`
  @media screen and (max-width: 959px) {
    display: flex;  
    justify-content: center;
    :after {
      content: '';
      width: 320px;
    }
  }
`

const ALL_COUNT = Number.MAX_VALUE

class SponsorRoll extends React.Component {
  render() {
    const { data, count, setIsShow, setModalData, searchText } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Roll className="columns is-multiline is-marginless">
        {
          posts &&
          posts.map(({ node: post }, idx) => {
            if (!searchText) {
              if (idx < count)
                return (
                  <Card key={"sponsorCard" + idx} {...post} image={true}>
                  </Card>
                )
              else return false
            } else {
              if (
                (post.frontmatter.name && post.frontmatter.name.toLowerCase().includes(searchText.toLowerCase())) ||
                (post.frontmatter.introduction && post.frontmatter.introduction.includes(searchText.toLowerCase())) ||
                (post.frontmatter.subName && post.frontmatter.subName.includes(searchText.toLowerCase()))
              ) {
                return (
                  <Card key={"sponsorCard" + idx} {...post} image={true}>
                  </Card>
                )
              } else return false
            }
          })}
      </Roll>
    )
  }
}

SponsorRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  count: PropTypes.number,
  searchText: PropTypes.string,
}

export default ({ count, setIsShow, setModalData, searchText }) => (
  <StaticQuery
    query={graphql`
      query SponsorRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "sponsor-post" } } }
        ) {
          edges {
            node {
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
                    fluid(maxWidth: 286, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SponsorRoll data={data} count={count || ALL_COUNT} setIsShow={setIsShow}
                                 setModalData={setModalData} searchText={searchText}/>}
  />
);
