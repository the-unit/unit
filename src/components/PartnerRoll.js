import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Card from "../components/Card"

import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ALL_COUNT = Number.MAX_VALUE;

class PartnerRoll extends React.Component {
  render() {
    const { data, count, setIsShow, setModalData, searchText } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline is-marginless is-vcentered">
        {posts &&
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
    );
  }
}

PartnerRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default ({ count, setIsShow, setModalData, searchText }) => (
  <StaticQuery
    query={graphql`
      query PartnerRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "partner-post" } } }
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
    render={data => <PartnerRoll data={data} count={count || ALL_COUNT} setIsShow={setIsShow} setModalData={setModalData} searchText={searchText}/>}
  />
);
