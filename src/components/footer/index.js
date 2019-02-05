import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const Footer = (props) => {
  const {classes} = props;
  return (
    <div className={classes.content}>
      <Divider light />
      <Grid container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Button className={classes.button}
                  target={'_blank'}
                  href={'http://www.github.com/'}
          >
            GitHub
          </Button>
          {'|'}
          <Button className={classes.button}
                  target={'_blank'}
                  href={'https://reactjs.org/'}
          >
            React
          </Button>
          {'|'}
          <Button className={classes.button}
                  target={'_blank'}
                  href={'https://material-ui.com/'}
          >
            Material
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Footer);