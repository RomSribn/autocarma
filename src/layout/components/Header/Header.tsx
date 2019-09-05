import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { providers, firebaseAppAuth } from 'services/Auth';
import history from 'utils/history';
import { routesGuest, routesUser, login } from 'routes/variables';

import './Header.scss';

interface user {
  uid: string;
}

interface CenteredTabsProps {
  fetchAccidents: () => void;
  signOut: () => Promise<void>;
  logout: () => void;
  loginCheck: (user: object) => void;
  fetchUsers: (uid: string) => void;
  user: user;
}

const CenteredTabs: any = ({
  user, signOut, logout, loginCheck, fetchAccidents, fetchUsers,
}) => {
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

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    history.push(routes[newValue]);
    setValue(newValue);
  }

  const onLogout = () => {
    logout();
    setValue(routesGuest.indexOf(login));
    signOut().then(() => history.push(login));
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

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(CenteredTabs);
