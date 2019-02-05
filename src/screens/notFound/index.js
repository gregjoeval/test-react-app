import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import Typography from "@material-ui/core/Typography";
import Layout from "../../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <Typography variant="h4">
        Not Found
      </Typography>
    </Layout>
  );
};

export default withStyles(styles)(NotFound);
