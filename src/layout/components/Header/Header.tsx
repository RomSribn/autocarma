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

<<<<<<< HEAD:src/layout/components/Header/Header.tsx
const CenteredTabs: any = ({
  user,
  signOut,
  logout,
  loginCheck,
  fetchAccidents,
  fetchUsers,
}: CenteredTabsProps) => {
=======
const CenteredTabs = ({
  user, signOut, logout, loginCheck, fetchAccidents, fetchUsers,
}) => {
>>>>>>> develop:src/layout/components/Header/Header.jsx
  const routes = user ? routesUser : routesGuest;

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (history.location.pathname) {
      setValue(routes.indexOf(history.location.pathname));
    }
    loginCheck(user);
    if (user) {
<<<<<<< HEAD:src/layout/components/Header/Header.tsx
      const { uid } = user;
      fetchAccidents();
      fetchUsers(uid);
=======
      fetchAccidents();
      fetchUsers(user.uid);
>>>>>>> develop:src/layout/components/Header/Header.jsx
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
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
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

<<<<<<< HEAD:src/layout/components/Header/Header.tsx
export default CenteredTabs;
=======
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
  fetchUsers: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }),
};
>>>>>>> develop:src/layout/components/Header/Header.jsx
