import React from "react"

import Layout from "../../components/Layout"
import SponsorRoll from "../../components/SponsorRoll"
import DetailTitleContainer from "../../components/Detail/DetailTitleContainer"
import DetailContent from "../../components/Detail/DetailContent"
import SearchBar from "../../components/SearchBar"

export default class SponsorIndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: "",
    }
  }

  setSearchText = (text) => {
    this.setState({
      searchText: text,
    })
  }

  render() {
    return (
      <Layout>
        <div
          className="margin-top-0"
          style={{
            height: "240px",
            backgroundColor: "#00a118",
            color: "white",
          }}
        >
          <div style={{
            paddingTop: "48px",
            paddingLeft: "48px",
          }}>
            <DetailTitleContainer>
              Sponsor
            </DetailTitleContainer>
            <DetailContent style={{
              paddingTop: "43px",
            }}>
              <div>
                IT 단체들의 성장을 돕는 기업, 기관들을 소개합니다.
              </div>
              <div>
                Partner를 쉽게 연결하여, 에너지소모를 줄이고
              </div>
              <div>
                긍정적인 선순환이 되길 바랍니다.
              </div>
            </DetailContent>
          </div>
        </div>
        <section className="section section-bg-color is-paddingless" style={{
          marginBottom: "50px",
        }}>
          <div style={{ display: "flex", height: "40px", alignItems: "center", justifyContent: "flex-end" }}>
            <SearchBar setSearchText={this.setSearchText}/>
          </div>
          <div className="container">
            <div className="content">
              <SponsorRoll searchText={this.state.searchText}/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
