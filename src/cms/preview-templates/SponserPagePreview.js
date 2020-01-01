import React from "react"
import PropTypes from "prop-types"
import { SponserPostTemplate } from "../../templates/sponser-post"

const SponserPostPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return <SponserPostTemplate frontmatter={data}/>
  } else {
    return <div>Loading ...</div>
  }
}

SponserPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SponserPostPreview
