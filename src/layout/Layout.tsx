import React from 'react';
import { LayoutProps } from 'types/index';
import Header from './components/Header/Header';
import Main from './components/Main';

const Layout: React.FC<LayoutProps> = ({
  children,
  logout,
  loginCheck,
  fetchAccidents,
  fetchUsers,
  user,
}: LayoutProps) => (
  <>
    <Header
      logout={logout}
      loginCheck={loginCheck}
      fetchUsers={fetchUsers}
      fetchAccidents={fetchAccidents}
      user={user}
    />
    <Main>{children}</Main>
  </>
);

export default Layout;
