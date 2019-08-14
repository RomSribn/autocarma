import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import history from '../../../utils/history';
import './Header.scss';

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
  const [value, setValue] = React.useState(routes.indexOf(history.location.pathname));

  function handleChange(event, newValue) {
    history.push(routes[newValue]);
    setValue(newValue);
  }

  return (
    <Paper className="tabs-root">
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
        <Tab label="Logout" />
      </Tabs>
    </Paper>
  );
}
