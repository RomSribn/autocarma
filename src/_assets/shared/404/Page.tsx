import React from 'react';
import './Page.scss';

const NotFound = () => (
  <div className="error-page">
    <div className="error-page-head">404</div>
    <div className="error-page-title">
      <p>Sorry! Page not found</p>
    </div>
    <div className="error-page-btn">Back to home</div>
  </div>
);

export default NotFound;
