import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Card from "../components/Card"

import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ALL_COUNT = Number.MAX_VALUE;

class PartnerRoll extends React.Component {
  render() {
    const { data, count, setIsShow, setModalData } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts);

    return (
      <div className="columns is-desktop is-multiline is-marginless">
        {posts &&
          posts.map(({ node: post }, idx) => {
            if (idx < count)
              return (
                  <Card key={"partnerCard"+idx} {...post} >
                  </Card>
              );
            else return false;
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

export default ({ count, setIsShow, setModalData }) => (
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
    render={data => <PartnerRoll data={data} count={count || ALL_COUNT} setIsShow={setIsShow} setModalData={setModalData}/>}
  />
);
