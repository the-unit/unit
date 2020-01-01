import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const SponserPostTemplate = () => {
  return (
    <div>

    </div>
  );
};

SponserPostTemplate.propTypes = {
};

const SponserPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
    </Layout>
  );
};

SponserPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default SponserPost;

export const pageQuery = graphql`
    query SponserPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                tags
            }
        }
    }
`;
