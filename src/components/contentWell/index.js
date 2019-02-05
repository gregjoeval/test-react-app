import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';

const ContentWell = (props) => {
  const {classes, children} = props;
  return (
    <div className={classes.contentWell} {...props}>
      {children}
    </div>
  );
};

export default withStyles(styles)(ContentWell);
