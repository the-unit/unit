import React from "react"
import PropTypes from "prop-types"
import { PartnerPostTemplate } from "../../templates/partner-post"

const PartnerPostPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return <PartnerPostTemplate frontmatter={data}/>
  } else {
    return <div>Loading ...</div>
  }
}

PartnerPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PartnerPostPreview
