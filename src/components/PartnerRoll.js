import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ALL_COUNT = Number.MAX_VALUE;

class PartnerRoll extends React.Component {
  render() {
    const { data, count, setIsShow, setModalData } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts);

    return (
      <>
        {posts &&
          posts.map(({ node: post }, idx) => {
            if (idx < count)
              return (
                <div key={post.id} className="column is-4 is-paddingless" style={{ backgroundColor: 'white', borderRadius: '20px', width: '260px', height: '151px', margin: ((idx % 3) === 1)? '20px 68px 20px 68px' : '20px 0 20px 0'}}>
                  <div style={{ padding: '21px 20px 11px 20px'}}>
                    <div>
                      <span>
                        { post.frontmatter.name }
                      </span>
                      <span style={{float: 'right'}}>
                        since { post.frontmatter.establishmentYear }
                      </span>
                    </div>
                    <div style={{ margin: '10px 0 0 0'}}>
                      <span>
                        { post.frontmatter.introduction }
                      </span>
                    </div>
                    <div>
                      <div>
                        웹페이지
                      </div>
                      <div>
                        f
                      </div>
                      <div>
                        m
                      </div>
                    </div>
                  </div>
                </div>
              );
            else return false;
          })}
      </>
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
