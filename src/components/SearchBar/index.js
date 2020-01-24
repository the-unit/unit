import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 24px;
  border-radius: 15px;
  border: solid 1px #d2d2d2;
  padding: 0 5px;
  margin-right: 17px;
`

const Index = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SearchBarContainer>
        <input style={{
          display: "block",
          width: '100%',
          border: 0,
        }} placeholder={"구현필요"}
           onChange={(e) => this.props.setSearchText(e.target.value)}
        />
        <div style={{
          display: "flex",
          alignItems: "center",
          float: "right",
        }}>
          <FontAwesomeIcon icon="search" style={{
            display: "inline-block",
            color: "#d2d2d2",
            width: "14px",
            marginRight: '3px'
          }}/>
        </div>
      </SearchBarContainer>
    )
  }
}

Index.propTypes = {
  setSearchText: PropTypes.func
}

export default Index