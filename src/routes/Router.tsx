import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  home,
  autocarma,
  accidents,
  createAccident,
  about,
  profile,
  logout,
  signup,
  login,
  viewpage,
} from './variables';

import Home from './Home';
import Autocarma from './Autocarma';
import Accidents from './Accidents';
import NewAccident from './NewAccident';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login';
import ViewPage from './ViewPage';

interface RouterProps {
  user: object;
}

const Router = ({ user }: RouterProps) => (
  <Switch>
    {user ? (
      <>
        <Route exact path={autocarma} component={Autocarma} />
        <Route exact path={home} component={Autocarma} />
        <Route exact path={accidents} component={Accidents} />
        <Route exact path={createAccident} component={NewAccident} />
        <Route exact path={about} component={() => <div />} />
        <Route exact path={profile} component={Profile} />
        <Route exact path={logout} component={() => <div />} />
        <Route exact path={viewpage} component={ViewPage} />
      </>
    ) : (
      <>
        <Route exact path={home} component={Home} />
        <Route exact path={signup} component={Signup} />
        <Route exact path={login} component={Login} />
      </>
    )}
    <Route component={() => <div>Not found</div>} />
  </Switch>
);

export default Router;
