import React from 'react';
import NavBar from '../../components/navBar';
import ActionBar from '../../components/actionBar';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  content: {
    padding: '1rem',
    paddingTop: '5rem',
    paddingBottom: '5rem'
  }
});

const Layout = (props) => {
  const {classes, children} = props;
  return (
    <div>
      <NavBar/>
      <div className={classes.content}>
        {children}
      </div>
      <ActionBar/>
    </div>
  );
};

export default withStyles(styles)(Layout);