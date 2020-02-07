import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import StyleInjector from "../components/StyleInjector"
import AboutUsPage from "../pages/aboutus/index"

export const AboutUsPostTemplate = () => {
  return (
    <StyleInjector>
      <AboutUsPage/>
    </StyleInjector>
  )
}

AboutUsPostTemplate.propTypes = {}

const AboutUsPost = () => {
  return (
    <AboutUsPostTemplate> </AboutUsPostTemplate>
  )
}

AboutUsPost.propTypes = {
  aboutUs: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutUsPost