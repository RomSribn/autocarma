import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { providers, firebaseAppAuth } from 'services/Auth';
import history from 'utils/history';

import './Header.scss';

const routesUser = [
  '/',
  '/accidents',
  '/createAccident',
  '/myAccidents',
  '/about',
  '/profile',
  '/logout',
];

const routesGuest = ['/signup', '/login'];

const CenteredTabs = ({
  user, signOut, logout, loginCheck, fetchAccidents,
}) => {
  let routes;
  if (user) {
    routes = routesUser;
    fetchAccidents();
    loginCheck(user);
  } else {
    routes = routesGuest;
  }
  const initialPage = async () => {
    const result = await history.location.pathname;
    return routes.indexOf(result);
  };

  const [value, setValue] = React.useState(initialPage());
  function handleChange(event, newValue) {
    history.push(routes[newValue]);
    setValue(newValue);
  }

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
          <Tab label="Accidents" />
          <Tab label="Add new accidents" />
          <Tab label="My accidents" />
          <Tab label="About" />
          <Tab label="Profile" />
          <Tab
            label="Logout"
            onClick={() => {
              logout();
              setValue(1);
              signOut().then(() => history.push('/login'));
            }}
          />
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

CenteredTabs.defaultProps = {
  user: null,
};

CenteredTabs.propTypes = {
  fetchAccidents: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  loginCheck: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
