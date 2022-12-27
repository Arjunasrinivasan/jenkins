import React, { useEffect } from 'react';
import { AppWrapper } from './common/AppWrapper';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { URL_PATH } from '../config/urlPath';

const LmiSession = ({ props }) => {
  const { state } = useLocation();
  const history = useHistory();
  const chatLogs = state.payload.data.attributes.chat_logs;

  useEffect(() => {
    if (!state) {
      // Redirect to choose-file page since no session is actually loaded
      history.replace(URL_PATH.CHOOSE_FILE);
    }
  }, [state]);

  return (
    <div className="container mt-5">
      <h3>
        Chat Logs
        <span className="float-right">
          <Link className="btn btn-warning" to={{ pathname: URL_PATH.SESSION, state }}>
            Exit Session
          </Link>
        </span>
      </h3>

      <div className="card p-3">
        {(!chatLogs || chatLogs.length === 0) && <div>No Chat logs available</div>}
        {(chatLogs || []).map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
};

export default AppWrapper(LmiSession);
