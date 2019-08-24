import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import { providers, firebaseAppAuth } from 'services/Auth';
import {
  home,
  accidents,
  createAccident,
  myAccidents,
  about,
  profile,
  logout,
  signup,
  login,
} from './variables';
import Autocarma from './Autocarma';
import Accidents from './Accidents';
import NewAccident from './NewAccident';
import Profile from './Profile/Profile';
import Signup from './Signup';
import Login from './Login';

const Router = ({ user }) => (
  <Switch>
    {user ? (
      <>
        <Route exact path={home} component={Autocarma} />
        <Route exact path={accidents} component={Accidents} />
        <Route exact path={createAccident} component={NewAccident} />
        <Route exact path={myAccidents} component={() => <div />} />
        <Route exact path={about} component={() => <div />} />
        <Route exact path={profile} component={Profile} />
        <Route exact path={logout} component={() => <div />} />
      </>
    ) : (
      <>
        <Route exact path={signup} component={Signup} />
        <Route exact path={login} component={Login} />
      </>
    )}
    <Route component={() => <div>Not found</div>} />
  </Switch>
);

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Router);

Router.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
