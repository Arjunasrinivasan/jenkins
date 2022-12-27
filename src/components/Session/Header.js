import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { URL_PATH } from '../../config/urlPath';

export default function Header() {
  const location = useLocation();

  return (
    <div className="row mb-4 mt-4">
      <div className="col-md-12">
        <h1 className="fs-3">
          Session
          <span className="float-right">
            <span
              id="launch-media-modal"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#media-modal"
            >
              View Media
            </span>{' '}
            <Link
              className="btn btn-secondary"
              to={{ pathname: URL_PATH.LMI_SESSION, state: location.state }}
            >
              View LMI Sessions
            </Link>{' '}
            <Link className="btn btn-warning" to={URL_PATH.CHOOSE_FILE}>
              Exit Session
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
}
