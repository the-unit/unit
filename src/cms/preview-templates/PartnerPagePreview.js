import React from "react"
import PropTypes from "prop-types"
import { PartnerPostTemplate } from "../../templates/partner-post"

const PartnerPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return <PartnerPostTemplate post={data}/>
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
