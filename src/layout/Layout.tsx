import React from 'react';
import { ILayoutProps } from './interface';
import Header from './components/Header/Header';
import Main from './components/Main';

const Layout: React.FC<ILayoutProps> = ({
  children,
  logout,
  loginCheck,
  fetchAccidents,
  fetchUsers,
  user,
  isLoading,
  isLogout,
}: ILayoutProps) => (
  <>
    <Header
      logout={logout}
      loginCheck={loginCheck}
      fetchUsers={fetchUsers}
      fetchAccidents={fetchAccidents}
      user={user}
      isLoading={isLoading}
      isLogout={isLogout}
    />
    <Main>{children}</Main>
  </>
);

export default Layout;
