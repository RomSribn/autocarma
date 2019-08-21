import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Main from './components/Main';

const Layout = ({
  children, logout, loginCheck, fetchAccidents,
}) => (
  <>
    <Header logout={logout} loginCheck={loginCheck} fetchAccidents={fetchAccidents} />
    <Main>{children}</Main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fetchAccidents: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  loginCheck: PropTypes.func.isRequired,
};
