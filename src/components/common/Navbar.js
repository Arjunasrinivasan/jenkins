import * as React from 'react';
import { Link } from 'react-router-dom';
import { URL_PATH } from '../../config/urlPath';

export default function Navbar() {
  return (
    <nav className="navbar navbar-secondary navbar-expand-lg sticky-top navbar-light bg-white border-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={URL_PATH.CHOOSE_FILE}>
                Home
              </Link>
            </li>
            <li>
              <a className="nav-link text-dark" href="https://support.proctoru.com">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
