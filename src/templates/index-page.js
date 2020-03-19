import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Button from "../components/Button"
import SponsorRoll from "../components/SponsorRoll"
import Divider from "../components/Divider"
import PartnerRoll from "../components/PartnerRoll"
import Footer from "../components/Footer"

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

  <div style={{ display: 'block' }}>
    <div
      style={{
        width: `100%`,
        backgroundRepeat: "no-repeat",
        height: `${(typeof window !== 'undefined' && window.innerHeight / 3) || 360}px`,
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
    <div style={{ height: "40px", backgroundColor: "white" }}>
    </div>
    <div>
      {[firstEvent, secondEvent, thirdEvent].map((evt, idx) => {
        return (
          <Link to={`/aboutus#${evt.summary}`} key={evt.summary + idx}>
            <div className="event"
                 style={{ height: "120px", backgroundColor: "white", textAlign: "center" }}
                 key={`evt-${idx}`}>
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
          </Link>
        )
      })}
    </div>
    <div style={{ height: "40px" }}>
      <Divider title={"Partner"}>
      </Divider>
    </div>
    <div>
      <PartnerRoll count={6}>
      </PartnerRoll>
    </div>
    <div style={{ display: 'inline-block', width: '100%', height: '40px' }}>
      <Link to={'/partner'}>
        <Button style={{ float: "right", marginTop: "16px", marginRight: "20px" }}>
            더보기
        </Button>
      </Link>
    </div>
    <div style={{ height: "40px" }}>
      <Divider title={"Sponsor"}>
      </Divider>
    </div>
    <div>
      <SponsorRoll count={6}>
      </SponsorRoll>
    </div>
    <div style={{ display: 'inline-block', width: '100%', height: '40px' }}>
      <Link to={'/sponsor'}>
        <Button style={{ float: "right", marginTop: "16px", marginRight: "20px" }}>
          더보기
        </Button>
      </Link>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  firstEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    summary: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    firstEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  secondEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    summary: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    secondEventImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  thirdEvent: PropTypes.shape({
    title: PropTypes.string,
    title_kr: PropTypes.string,
    summary: PropTypes.string,
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
  const indexFrontmatter = data.index.frontmatter
  const sponsorList = data.sponsor.edges
  const partnerList = data.partner.edges
  const [isShow, setIsShow] = useState(false)
  const [modalData, setModalData] = useState({
    name: "",
    subName: "",
    establishmentYear: undefined,
    slogan: "",
    introduction: "",
    location: "",
    email: "",
    logo: undefined,
    dept: "",
  })

  return (
    <Layout isShow={isShow} setIsShow={setIsShow} modalData={modalData}>
      <IndexPageTemplate
        image={indexFrontmatter.image}
        heading={indexFrontmatter.heading}
        subheading={indexFrontmatter.subheading}
        firstEvent={indexFrontmatter.firstEvent}
        secondEvent={indexFrontmatter.secondEvent}
        thirdEvent={indexFrontmatter.thirdEvent}
        description={indexFrontmatter.description}
        intro={indexFrontmatter.intro}
        sponsorList={sponsorList}
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
                    summary
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
                    summary
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
                    summary
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
        sponsor: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "sponsor-post" } } }
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
