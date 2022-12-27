import React from 'react';
import ClipLoader from 'react-spinners/BeatLoader';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { URL_PATH } from '../config/urlPath';
import { login } from '../action/login';

export default function Redirect() {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    const initiateAuth = async code => {
      const isAuthenticated = await dispatch(login(code));
      if (isAuthenticated) {
        // Let the user through but replace the history so they can't navigate to the redirect page with the back button
        history.replace(URL_PATH.CHOOSE_FILE);
      }
    };

    const urlSearchParams = new URLSearchParams(window.location.search);
    const { code } = Object.fromEntries(urlSearchParams.entries());
    if (!code) {
      // No code means this page wasn't properly used in our auth flow so send the user to authenticate
      history.replace(URL_PATH.INDEX_PAGE);
    } else {
      initiateAuth(code);
    }
  }, []);

  return (
    <>
      <div className="container text-center mt-5">
        <ClipLoader color="#0072b1" loading={true} size={30} />
        <p>Authenticating ...</p>
      </div>
    </>
  );
}
