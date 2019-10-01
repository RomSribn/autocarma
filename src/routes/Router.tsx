import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { userCheck, unUserCheck } from '_assets/shared/Hoc/userCheck';
import NotFound from '_assets/shared/404/Page';
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

import Logout from './Logout';
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
    <Route exact path={home} component={() => userCheck(Home, user)} />
    <Route exact path={autocarma} component={Autocarma} />
    <Route exact path={accidents} component={() => unUserCheck(Accidents, user)} />
    <Route exact path={createAccident} component={() => unUserCheck(NewAccident, user)} />
    <Route exact path={about} component={() => <div />} />
    <Route exact path={profile} component={() => unUserCheck(Profile, user)} />
    <Route exact path={logout} component={() => unUserCheck(Logout, user)} />
    <Route exact path={viewpage} component={() => unUserCheck(ViewPage, user)} />
    <Route exact path={signup} component={() => userCheck(Signup, user)} />
    <Route exact path={login} component={() => userCheck(Login, user)} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
