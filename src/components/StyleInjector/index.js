import React from "react"
import PropTypes from "prop-types"
import { StyleSheetManager } from "styled-components"

const StyleInjector = ({ children }) => {
  const iframe = document.getElementsByTagName("iframe")[0]
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      {children}
    </StyleSheetManager>
  )
}

export default StyleInjector;