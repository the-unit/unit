import React from 'react'
import { Link } from 'gatsby'

import logoWhite from '../../static/img/logo_white.png'
import facebook from '../../static/img/social/facebook.svg'
import instagram from '../../static/img/social/instagram.svg'
import twitter from '../../static/img/social/twitter.svg'
import vimeo from '../../static/img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black">
        <div className="content">
          <div className="container"> 
            <div className="columns is-centered">
              <div className="column foot has-text-centered is-4">
                <section>
                  <Link className="navbar-item has-text-white-ter" to="/" style={{ justifyContent: 'center' }}>
                    Home
                  </Link>
                  <Link className="navbar-item has-text-white-ter" to="/faq" style={{ justifyContent: 'center' }}>
                    FAQ
                  </Link>
                </section>  
              </div>
              <div className="column foot has-text-centered is-4">
                <Link className="navbar-item has-text-white-ter" to="/partner" style={{ justifyContent: 'center' }}>
                  Partner
                </Link>
                <Link className="navbar-item has-text-white-ter" to="/contact" style={{ justifyContent: 'center' }}>
                  Contact
                </Link>
              </div>
              <div className="column foot has-text-centered is-4">
                <Link className="navbar-item has-text-white-ter" to="/sponser" style={{ justifyContent: 'center' }}>
                  Sponser
                </Link>
                <a
                  className="navbar-item has-text-white-ter"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ justifyContent: 'center' }}
                >
                  Admin 
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          <div className="columns" style={{ justifyContent: 'center' }}>
            <div className="column is-3 social">
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="vimeo" href="https://vimeo.com">
                <img
                  src={vimeo}
                  alt="Vimeo"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          <img
            src={logoWhite}
            alt="Kaldi"
            style={{ width: '9.6em', height: '3.2em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
