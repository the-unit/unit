import React from "react"
import PropTypes from "prop-types"
import { SponsorPostTemplate } from "../../templates/sponsor-post"

const SponsorPostPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return <SponsorPostTemplate frontmatter={data}/>
  } else {
    return <div>Loading ...</div>
  }
}

SponsorPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SponsorPostPreview
