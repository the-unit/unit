import React from "react";

import Layout from "../../components/Layout";
import SponsorRoll from "../../components/SponsorRoll";

export default class SponsorIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem"
            }}
          >
            Sponsor List
          </h1>
        </div>
        <section className="section section-bg-color">
          <div className="container">
            <div className="content">
              <SponsorRoll count={6}/>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}