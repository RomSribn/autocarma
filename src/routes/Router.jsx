import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Accidents from './Accidents/index';
import Profile from './Profile';

const Router = () => (
  <Switch>
    <Route exact path="/" component={() => <div />} />
    <Route exact path="/accidents" component={Accidents} />
    <Route exact path="/createAccident" component={() => <div />} />
    <Route exact path="/myAccidents" component={() => <div />} />
    <Route exact path="/about" component={() => <div />} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/logout" component={() => <div />} />
  </Switch>
);
export default Router;
