import React from "react";

import Layout from "../../components/Layout";
import PartnerRoll from "../../components/PartnerRoll";

export default class PartnerIndexPage extends React.Component {
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
            Partner List
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <PartnerRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
