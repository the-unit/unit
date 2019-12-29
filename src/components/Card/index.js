import React from "react"
import CardContainer from "./CardContainer"
import CardContent from "./CardContent"

const Card = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <CardContainer className="column is-4 is-paddingless" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent>
        </CardContent>
      </CardContainer>
    )
  }
}

export default Card