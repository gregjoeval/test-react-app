import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../screens/notFound';
import Home from '../screens/home';
import About from '../screens/about';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path={["/home", "/index"]}
        render={props => <Home {...props} />}
      />
      <Route
        path="/about"
        render={props => <About {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRouter;
