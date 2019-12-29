import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Card from "../components/Card"
import SponserRoll from "../components/SponserRoll"
import PartnerRoll from "../components/PartnerRoll"

export const IndexPageTemplate = ({
                                    image,
                                    heading,
                                    subheading,
                                    firstEvent,
                                    secondEvent,
                                    thirdEvent,
                                    setIsShow,
                                    isShow,
                                    setModalData,
                                  }) => (
  <div>
    <div
      style={{
        width: `${document.body.clientWidth}`,
        backgroundRepeat: "no-repeat",
        height: `${window.innerHeight / 3}px`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div style={{
        height: "100%",
        width: "100%",
        backgroundBlendMode: "screen",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 50%, rgba(0, 110, 39, 0.5) 100%)",
      }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{
            justifyContent: "center",
            width: "320px",
            height: "60px",
            backgroundColor: "rgba(24, 111, 37, 0.85)",
            alignItems: "center",
            display: "flex",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "6px",
          }}>
            <span
              style={{
                color: "white",
                lineHeight: "1",
                padding: "0.25em",
                textAlign: "center",
              }}
            >
              {heading}
            </span>
          </div>
          <div style={{
            justifyContent: "center",
            width: "320px",
            height: "29px",
            backgroundColor: "rgba(24, 111, 37, 0.85)",
            alignItems: "center",
            display: "flex",
            fontSize: "16px",
            fontWeight: "bold",
          }}>
            <span
              style={{
                color: "white",
                lineHeight: "1",
                padding: "0.25em",
                textAlign: "center",
              }}
            >
              {subheading}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style={{ height: "40px", backgroundColor: "rgba(217,217,217,0.05)" }}>
    </div>
    <div className="columns is-desktop is-marginless">
      {[firstEvent, secondEvent, thirdEvent].map((evt, idx) => {
        return (
          <div className="column is-paddingless"
               style={{ height: "120px", backgroundColor: "rgba(217,217,217,0.05)", textAlign: "center" }} key={`evt-${idx}`}>
            <span style={{ fontSize: "16px", fontWeight: "bold", color: "#186f25" }}>
              {evt.title}
            </span>
            <br/>
            <div style={{ marginTop: "8px" }}>
              <span style={{ fontSize: "14px", color: "#aeaeae" }}>
                {evt.title_kr} | {evt.date}
              </span>
            </div>
          </div>
        )
      })}
    </div>

    <div>
      <PartnerRoll count={6}>
      </PartnerRoll>
    </div>
    {/* Partner */}
    {/*<div className="columns is-multiline" style={{ backgroundColor: "rgba(217,217,217,0.05)", margin: 0, padding: "0 20px 0 20px" }}>*/}
    {/*  <PartnerRoll count={6} setIsShow={setIsShow} isShow={isShow} setModalData={setModalData}></PartnerRoll>*/}
    {/*</div>*/}
    {/* Sponser */}
    {/*<div>*/}
    {/*  <SponserRoll count={6} setIsShow={setIsShow} isShow={isShow} setModalData={setModalData}></SponserRoll>*/}
    {/*</div>*/}
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  firstEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    firstEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  secondEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    secondEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  thirdEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    thirdEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  console.log("data is", data)
  const indexFrontmatter = data.index.frontmatter
  const sponserList = data.sponser.edges
  const partnerList = data.partner.edges
  const [isShow, setIsShow] = useState(false)
  const [modalData, setModalData] = useState({
    name: "",
    subName: "",
    establishmentYear: "",
    slogan: "",
    introduction: "",
    location: "",
    email: "",
    logo: "",
    dept: "",
  })
  console.log("modalData is", modalData)

  return (
    <Layout isShow={isShow} setIsShow={setIsShow} modalData={modalData}>
      <IndexPageTemplate
        image={indexFrontmatter.image}
        title={indexFrontmatter.title}
        heading={indexFrontmatter.heading}
        subheading={indexFrontmatter.subheading}
        firstEvent={indexFrontmatter.firstEvent}
        secondEvent={indexFrontmatter.secondEvent}
        thirdEvent={indexFrontmatter.thirdEvent}
        description={indexFrontmatter.description}
        intro={indexFrontmatter.intro}
        sponserList={sponserList}
        partnerList={partnerList}
        setIsShow={setIsShow}
        isShow={isShow}
        setModalData={setModalData}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
    query IndexPageTemplate {
        index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                subheading
                firstEvent {
                    title
                    title_kr
                    date
                    description
                    firstEventImage {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                secondEvent {
                    title
                    title_kr
                    date
                    description
                    secondEventImage {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                thirdEvent {
                    title
                    title_kr
                    date
                    description
                    thirdEventImage {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        sponser: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "sponser-post" } } }
            limit: 6
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        name
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                        logo {
                            childImageSharp {
                                fluid(maxWidth: 120, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        partner: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "partner-post" } } }
            limit: 6
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        name
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                        logo {
                            childImageSharp {
                                fluid(maxWidth: 120, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
