import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import Card from "./Card"

const ALL_COUNT = Number.MAX_VALUE

class SponsorRoll extends React.Component {
  render() {
    const { data, count, setIsShow, setModalData, searchText } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline is-marginless">
        {
          posts &&
          posts.map(({ node: post }, idx) => {
            if (!searchText) {
              if (idx < count)
                return (
                  <Card key={"sponsorCard" + idx} {...post} >
                  </Card>
                )
              else return false
            } else {
              if (
                (post.frontmatter.name && post.frontmatter.name.toLowerCase().includes(searchText.toLowerCase())) ||
                (post.frontmatter.introduction && post.frontmatter.introduction.includes(searchText.toLowerCase()))
              ) {
                return (
                  <Card key={"sponsorCard" + idx} {...post} >
                  </Card>
                )
              } else return false
            }
          })}
      </div>
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
                    fluid(maxWidth: 120, quality: 100) {
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
