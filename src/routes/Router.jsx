import React from 'react';
import { Route, Switch } from 'react-router-dom';


const Router = () => (
  <Switch>
    <Route exact path="/" component={() => <div />} />
  </Switch>
);
export default Router;
