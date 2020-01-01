import React from "react"
import PropTypes from "prop-types"
import { StyleSheetManager } from "styled-components"

const StyleInjector = ({ children }) => {
  const iframe = typeof document !== "undefined" && document.getElementsByTagName("iframe")[0]
  const iframeHeaderElm = typeof iframe !== "undefined" && iframe.contentDocument && iframe.contentDocument.head
  if (iframeHeaderElm) {
    return (<StyleSheetManager target={iframeHeaderElm}>
      {children}
    </StyleSheetManager>)
  } else {
    return (<>{children}</>)
  }
}

export default StyleInjector