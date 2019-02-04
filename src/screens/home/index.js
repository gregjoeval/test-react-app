import React from 'react';
import Layout from '../../components/layout';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
});

const Home = (props) => {
  return (
    <Layout>
      <Typography variant="h4">
        Home
      </Typography>
    </Layout>
  );
};

export default withStyles(styles)(Home);
