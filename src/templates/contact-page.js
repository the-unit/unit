import React from "react"
import PropTypes from "prop-types"

import StyleInjector from "../components/StyleInjector"
import ContactPage from "../pages/contact/index"

export const ContactPostTemplate = () => {
  return (
    <StyleInjector>
      <ContactPage/>
    </StyleInjector>
  )
}

ContactPostTemplate.propTypes = {}

const ContactPost = () => {
  return (
    <ContactPostTemplate> </ContactPostTemplate>
  )
}

ContactPost.propTypes = {
  contact: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ContactPost