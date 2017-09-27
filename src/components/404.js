import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import '../styles/404.less';

export const PageNotFoundComponent = () => {
  return (
    <div className="app-404-container">
      <div className="app-404-content">
        <div className="app-404-icon">
          <Glyphicon glyph="exclamation-sign" />
        </div>
        <div className="app-404-title">404</div>
        <small>This page does not exist.</small>
      </div>
    </div>
  );
};