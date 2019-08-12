import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import firebase from 'firebase';
import history from '../../../utils/history';
import './Header.css';
// import { getMaxListeners } from "cluster";

const routes = [
  '/',
  '/accidents',
  '/createAccident',
  '/myAccidents',
  '/about',
  '/profile',
  '/logout',
];

export default function CenteredTabs() {
  const [setValue] = React.useState(0);
  function handleChange(event, newValue) {
    history.push(routes[newValue]);
    setValue(newValue);
  }

  return (
    <Paper className="tabs-root">
      <Tabs
        className="tabs"
        value={routes.indexOf(history.location.pathname)}
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
        <Tab label="Logout" />
      </Tabs>
    </Paper>
  );
}
