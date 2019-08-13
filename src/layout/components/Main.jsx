import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

const Main = ({ children }) => <div className="main">{children}</div>;

export default Main;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
