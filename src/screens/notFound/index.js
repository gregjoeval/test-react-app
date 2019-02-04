import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Layout from "../../components/layout";

const NotFound = () => {
  const linkHome = props => <Link to="/" {...props} />;
  
  return (
    <Layout>
      <Typography variant="h4">
        Not Found
      </Typography>
    </Layout>
  );
};

export default NotFound;
