import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  contentWell: {
    backgroundColor: '#eeeeee',
    borderRadius: '0.5rem',
    padding: '1rem'
  }
});

const ContentWell = (props) => {
  const {classes, children} = props;
  return (
    <div className={classes.contentWell} {...props}>
      {children}
    </div>
  );
};

export default withStyles(styles)(ContentWell);
