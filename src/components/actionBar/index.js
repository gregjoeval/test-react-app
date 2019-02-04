import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

const styles = theme => ({
  actionBar: {
    top: 'auto',
    bottom: 0
  },
  toolBar: {
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

const ActionBar = (props) => {
  const {classes} = props;
  const linkHome = props => <Link to="/" {...props} />;
  const linkAbout = props => <Link to="/about" {...props} />;
  
  return (
    <AppBar position={"fixed"} color={"default"} className={classes.actionBar}>
      <Toolbar variant={"regular"} className={classes.toolBar}>
        <Button variant="contained" color="primary" component={linkHome}>
          {'HOME'}
        </Button>
        <Button variant="contained" color="secondary" component={linkAbout}>
          {'ABOUT'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(ActionBar);