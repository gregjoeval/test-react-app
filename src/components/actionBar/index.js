import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

const ActionBar = (props) => {
  const {classes, children} = props;
  return (
    <AppBar position={"fixed"} color={"default"} className={classes.actionBar}>
      <Toolbar variant={"regular"} className={classes.toolBar}>
        {children || (
          <>
            <Button variant="contained" color="primary" component={(props) => <Link to="/" {...props}/>}>
              {'ACTION'}
            </Button>
            <Button variant="contained" color="secondary" component={(props) => <Link to="/about" {...props}/>}>
              {'VERB'}
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(ActionBar);