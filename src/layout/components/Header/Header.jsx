import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#efefef"
  },
  tabs: {
    backgroundColor: "white"
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Autocarma" />
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
