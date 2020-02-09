import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../../components/Layout"
import DetailTitleContainer from "../../components/Detail/DetailTitleContainer"
import DetailContent from "../../components/Detail/DetailContent"
import FaqDescription from "../../components/FaqDescription"
import styled from "styled-components"

const SubHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f7f7f7;
`

const SubHeaderContent = styled.div`
  font-size: 18px;
  color: black;
  font-weight: bold;
  padding-left: 48px;
  padding-top: 22px;
`

const LastCommentContainer = styled.div`
  margin-left:48px;
  font-size: 14px;
  color: black; 
`

const ContactPage = ({
                       data: {
                         markdownRemark: { frontmatter },
                       },
                     }) => (
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
        <DetailTitleContainer style={{ width: "107px" }}>
          {frontmatter.mainHeader}
        </DetailTitleContainer>
        <DetailContent style={{
          paddingTop: "43px",
          width: "100%"
        }}>
          <div>
            {frontmatter.mainDescription1}
          </div>
          <div>
            {frontmatter.mainDescription2}
          </div>
          <div>
            {frontmatter.mainDescription3}
          </div>
        </DetailContent>
      </div>
    </div>
    <section className="section section-bg-color is-paddingless" style={{
      marginBottom: "24px",
    }}>
      <SubHeaderContainer>
        <SubHeaderContent>
          {frontmatter.subHeader}
        </SubHeaderContent>
      </SubHeaderContainer>
      <FaqDescription faq={frontmatter.firstFAQ}/>
      <FaqDescription faq={frontmatter.secondFAQ}/>
      <FaqDescription faq={frontmatter.thirdFAQ}/>
      <FaqDescription faq={frontmatter.forthFAQ}/>
      <FaqDescription faq={frontmatter.fifthFAQ}/>
      <FaqDescription faq={frontmatter.sixthFAQ}/>
      <LastCommentContainer>
        {frontmatter.lastComment1}
      </LastCommentContainer>
      <LastCommentContainer>
        {frontmatter.lastComment2}
      </LastCommentContainer>
    </section>
  </Layout>
)

export default ContactPage

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        mainHeader: PropTypes.string,
        mainDescription1: PropTypes.string,
        mainDescription2: PropTypes.string,
        mainDescription3: PropTypes.string,
        subHeader: PropTypes.string,
        subDescription: PropTypes.string,
        firstFAQ: PropTypes.shape({
          title: PropTypes.string,
          description1: PropTypes.string,
          description2: PropTypes.string,
        }),
        secondFAQ: PropTypes.shape({
          title: PropTypes.string,
          description1: PropTypes.string,
          description2: PropTypes.string,
        }),
        thirdFAQ: PropTypes.shape({
          title: PropTypes.string,
          description1: PropTypes.string,
          description2: PropTypes.string,
        }),
        forthFAQ: PropTypes.shape({
          title: PropTypes.string,
          description1: PropTypes.string,
          description2: PropTypes.string,
        }),
        fifthFAQ: PropTypes.shape({
          title: PropTypes.string,
          description1: PropTypes.string,
          description2: PropTypes.string,
        }),
        sixthFAQ: PropTypes.shape({
          title: PropTypes.string,
          description1: PropTypes.string,
          description2: PropTypes.string,
        }),
        lastComment1: PropTypes.string,
        lastComment2: PropTypes.string,
      }),
    }),
  }),
}

export const ContactPageQuery = <StaticQuery query={graphql`
    query ContactPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
            frontmatter {
                mainHeader
                mainDescription1
                mainDescription2
                mainDescription3
                subHeader
                firstFAQ {
                    title
                    description1
                    description2
                }
                secondFAQ {
                    title
                    description1
                    description2
                }
                thirdFAQ {
                    title
                    description1
                    description2
                }
                forthFAQ {
                    title
                    description1
                    description2
                }
                fifthFAQ {
                    title
                    description1
                    description2
                }
                sixthFAQ {
                    title
                    description1
                    description2
                }
                lastComment1
                lastComment2
            }
        }
    }
`
}/>