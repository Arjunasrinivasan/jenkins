import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { URL_PATH } from './config/urlPath';
import Login from './components/Login';
import ChooseFile from './components/ChooseFile';
import LmiSession from './components/LmiSession';
import Redirect from './components/Redirect';
import Session from './components/Session';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <React.Fragment>
      <React.StrictMode>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path={URL_PATH.INDEX_PAGE} exact component={Login} />
              <Route path={URL_PATH.REDIRECT_AUTH} exact component={Redirect} />

              <ProtectedRoute path={URL_PATH.CHOOSE_FILE} exact component={ChooseFile} />
              <ProtectedRoute path={URL_PATH.SESSION} exact component={Session} />
              <ProtectedRoute path={URL_PATH.LMI_SESSION} exact component={LmiSession} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </React.StrictMode>
    </React.Fragment>
  );
}
