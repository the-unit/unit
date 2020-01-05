import React from "react"
import styled from "styled-components"

const DividerContainer = styled.div`
  display: flex;
  padding-left: 30px;
  //width: 960px;
  height: 40px;
  background-color: #ffffff;
  align-items: center;
`

const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #595959;
`

const Divider = styled.div`
  flex: 1;
  margin-left: 30px;
  margin-right: 20px;
  height: 1px;
  border: solid 1px #d8d8d8;
`

const Index = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <DividerContainer>
        <TitleContainer>
          <span>{this.props.title}</span>
        </TitleContainer>
        <Divider>
        </Divider>
      </DividerContainer>
    )
  }
}

export default Index
