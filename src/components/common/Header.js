import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { URL_PATH } from '../../config/urlPath';

export default function Header() {
  const location = useLocation();
  const currentUser = useSelector(state => state.login);
  const { info } = currentUser;
  const { first_name, last_name } = info || {};

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg justify-content-center bg-dark">
        <div className="container">
          <a className="navbar-brand d-flex w-50 mr-auto" href="/">
            <img
              alt="ProctorU Logo"
              height="36"
              src="https://assets.proctoru.com/assets/wordmark-light-23623b37c72d9439dda45f7f1fba040ea410d9820d3dba45ecea85609af4b32f.svg"
            />
          </a>{' '}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topNav"
            aria-label="Navigation Toggle Button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-100" id="topNav">
            <div className="navbar-nav w-100 justify-content-center"></div>
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-white cursor-pointer"
                  norel=""
                  id="nav-user-dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle"
                    height="25"
                    width="25"
                    alt="Avatar"
                    src="https://assets.proctoru.com/assets/procki-avatar-aca7f1ebde663d99e4039ac963d750531f0310362b524593ec49acb6e00bab8f.svg"
                  />
                  {'  '}
                  {`${first_name} ${last_name}`}
                </span>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="nav-user-dropdown"
                  style={{ zIndex: 1051 }}
                >
                  <h6 className="dropdown-header">(GMT-06:00) US/Central</h6>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    rel="nofollow"
                    data-method="delete"
                    href={window.location.origin}
                  >
                    Logout
                  </a>{' '}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to={{ pathname: URL_PATH.CHOOSE_FILE, state: location.state }}
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ visibility: location && location.state ? 'visible' : 'hidden' }}
              >
                <Link
                  className="nav-link text-dark"
                  to={{ pathname: URL_PATH.SESSION, state: location.state }}
                >
                  Session
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
