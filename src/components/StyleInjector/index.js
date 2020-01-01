import React from "react"
import PropTypes from "prop-types"
import { StyleSheetManager } from "styled-components"

const StyleInjector = ({ children }) => {
  const iframe = typeof document !== "undefined" && document.getElementsByTagName("iframe")[0]
  const iframeHeaderElm = iframe && iframe.contentDocument.head
  if (iframe) {
    return (<StyleSheetManager target={iframeHeaderElm}>
      {children}
    </StyleSheetManager>)
  } else {
    return (<div>{children}</div>)
  }
}

export default StyleInjector