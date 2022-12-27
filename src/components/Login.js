import React from 'react';
import { API_BASE_URL } from '../config';

export default function Login() {
  const onSubmit = () => {
    window.location.assign(
      `${API_BASE_URL}/oauth/authorize?client_id=${process.env.REACT_APP_ClientID}&redirect_uri=${window.location.origin}/auth/callback&response_type=code`
    );
  };

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 mt-4">
              <div className="row">
                <div className="col-md-12 text-center mb-5">
                  <a href="/">
                    <img
                      alt="ProctorU's mascot Procki"
                      className="d-block mx-auto mb-4"
                      width="60"
                      src="https://assets.proctoru.com/assets/procki-20f8ff0be72c8c9d1392cd16691a1aeb216aa4a0b6826284bb9170397414c660.svg"
                    />
                  </a>
                  <h1 className="h3">ProctorU</h1>
                  <h3 className="h4">Sign in to Your Account</h3>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="actions">
                    <button
                      type="submit"
                      name="commit"
                      onClick={() => {
                        onSubmit();
                      }}
                      className="btn btn-primary btn-block"
                      data-disable-with="Log in"
                    >
                      Log in with ProctorU
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-2 offset-md-5 text-center text-dark">
          <p className="legal my-2">©2021 ProctorU, Inc.</p>
          <p>All rights reserved</p>
          <p>
            <a href="https://www.proctoru.com/privacy" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="https://proctoru.com/terms" target="_blank" rel="noreferrer">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
