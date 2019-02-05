import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import NavBar from '../../components/navBar';
import ActionBar from '../../components/actionBar';
import Grid from "@material-ui/core/Grid";
import Footer from "../footer";

const Layout = (props) => {
  const {classes, children} = props;
  return (
    <React.Fragment>
      <NavBar/>
      <div className={classes.content}>
        <Grid container
              spacing={0}
              direction="column"
              justify="flex-start"
              alignItems="center"
        >
          <Grid item xs={12} sm={11} md={10} lg={9}>
            {children}
          </Grid>
          <Grid item xs={12} sm={11} md={10} lg={9}>
            <Footer/>
          </Grid>
        </Grid>
      </div>
      <ActionBar/>
    </React.Fragment>
  );
};

export default withStyles(styles)(Layout);