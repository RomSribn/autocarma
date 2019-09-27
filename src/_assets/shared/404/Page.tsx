import React from 'react';
import history from 'utils/history';
import { autocarma } from 'routes/variables';
import './Page.scss';

const NotFound = () => (
  <div className="error-page">
    <div className="error-page-head">404</div>
    <div className="error-page-title">
      <p>Sorry! Page not found</p>
    </div>
    <button className="error-page-btn" onClick={() => history.push(autocarma)}>
      Back to home
    </button>
  </div>
);

export default NotFound;
