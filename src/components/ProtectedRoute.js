import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { URL_PATH } from '../config/urlPath';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const login = useSelector(state => state.login);

  return (
    <Route
      {...rest}
      render={props =>
        // Don't let anyone through who doesn't have an active user in the redux store, make them login instead
        login?.info?.uuid && login?.info?.active ? (
          <Component {...props} />
        ) : (
          <Redirect to={URL_PATH.INDEX_PAGE} />
        )
      }
    />
  );
}
