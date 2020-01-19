import React from "react"

import Layout from "../../components/Layout"
import PartnerRoll from "../../components/PartnerRoll"
import DetailTitleContainer from "../../components/Detail/DetailTitleContainer"
import DetailContent from "../../components/Detail/DetailContent"
import Footer from "../../components/Footer"


export default class PartnerIndexPage extends React.Component {
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
              Partner
            </DetailTitleContainer>
            <DetailContent style={{
              paddingTop: "43px",
            }}>
              <div>
                다양한 분야에서 활동하는 IT 단체들을 소개합니다.
              </div>
              <div>
                Sponsor와 보다 쉽게 연결되어,
              </div>
              <div>
                다양한 기회를 만들고 시너지로 이어지길 바랍니다.
              </div>
            </DetailContent>
          </div>
        </div>
        <section className="section section-bg-color is-paddingless" style={{
          marginBottom: "50px",
        }}>
          <div className="container">
            <div className="content">
              <PartnerRoll/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
