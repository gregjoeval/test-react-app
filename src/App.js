import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './themes/default';
import AppRouter from './routes/router';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter/>
    </MuiThemeProvider>
  );
};

export default App;
