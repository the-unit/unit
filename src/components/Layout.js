import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

library.add(faSearch)

import Navbar from "./Navbar"
import "./all.sass"
import useSiteMetadata from "./SiteMetadata"
import Footer from "./Footer"

const TemplateWrapper = ({ children, isShow, setIsShow, modalData }) => {
  const { title, description, type } = useSiteMetadata()
  return (
    <div style={{ maxWidth: `960px`, margin: `0 auto` }}>
      <Helmet>
        <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description}/>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff"/>

        <meta property="og:type" content={type}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:url" content="/"/>
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.png`}
        />
      </Helmet>
      <Navbar/>
      <div>{children}</div>
      <div style={{ marginTop: "25px" }}>
        <Footer/>
      </div>
      {/*<Modal isShow={isShow} setIsShow={setIsShow} modalData={modalData}></Modal>*/}
    </div>
  )
}

export default TemplateWrapper
