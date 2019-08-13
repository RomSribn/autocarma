import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header/index';
import Main from './components/Main';

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
