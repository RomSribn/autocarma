import 'firebase/auth';
import { auth } from 'firebase/app';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import history from 'utils/history';
import { routesGuest, routesUser, login } from 'routes/variables';
import { CenteredTabsProps } from 'types/index';

import './Header.scss';

const CenteredTabs: any = ({
  user,
  signOut,
  logout,
  loginCheck,
  fetchAccidents,
  fetchUsers,
}: CenteredTabsProps) => {
  const routes = user ? routesUser : routesGuest;

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (history.location.pathname) {
      setValue(routes.indexOf(history.location.pathname));
    }
    loginCheck(user);
    if (user) {
      const { uid } = user;
      fetchAccidents();
      fetchUsers(uid);
    }
  }, [fetchAccidents, fetchUsers, loginCheck, routes, user]);

  function handleChange(event, newValue) {
    history.push(routes[newValue]);
    setValue(newValue);
  }

  const onLogout = () => {
    logout();
    setValue(routesGuest.indexOf(login));
    auth()
      .signOut()
      .then(() => history.push(login));
  };

  return (
    <Paper className="tabs-root">
      {user ? (
        <Tabs
          className="tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab className="logo-bold" label="Autocarma" />
          <Tab label="My accidents" />
          <Tab label="Add new accidents" />
          <Tab label="About" />
          <Tab label="Profile" />
          <Tab label="Logout" onClick={onLogout} />
        </Tabs>
      ) : (
        <Tabs
          className="tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Create an account" />
          <Tab label="Get started" />
        </Tabs>
      )}
    </Paper>
  );
};

export default CenteredTabs;