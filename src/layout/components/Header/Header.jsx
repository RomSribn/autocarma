import withFirebaseAuth from 'react-with-firebase-auth';
import { auth, createUserWithEmailAndPassword } from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import history from '../../../utils/history';
import firebaseConfig from '../../../firebase';


import './Header.scss';

const providers = {
  googleProvider: new auth.GoogleAuthProvider(),
};


const firebaseAppAuth = firebaseConfig.auth();

const routesUser = [
  '/',
  '/accidents',
  '/createAccident',
  '/myAccidents',
  '/about',
  '/profile',
  '/logout',
];

const routesGuest = [
  '/signup',
  '/login',
];

const CenteredTabs = ({ user, signOut, signInWithGoogle }) => {
  const routes = user ? routesUser : routesGuest;
  const [value, setValue] = React.useState(routes.indexOf(history.location.pathname));

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
          <Tab
            label="About"
            onClick={() => user.updateProfile({
              displayName: 'Vasya',
            }).then(res => console.log(res)).catch(er => console.log(er))
}
          />
          <Tab label="Profile" />
          <Tab label="Logout" onClick={signOut} />
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
