import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Main from './components/Main';

interface LayoutProps {
  children: React.ReactNode;
  fetchAccidents: () => void;
  logout: () => void;
  loginCheck: (user: object) => void;
  fetchUsers: (uid: string) => void;
}

const Layout = ({
  children, logout, loginCheck, fetchAccidents, fetchUsers,
}: LayoutProps) => (
  <>
    <Header
      logout={logout}
      loginCheck={loginCheck}
      fetchUsers={fetchUsers}
      fetchAccidents={fetchAccidents}
    />
    <Main>{children}</Main>
  </>
);

export default Layout;
