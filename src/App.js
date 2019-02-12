import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './themes/default';
import AppRouter from './routes/router';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AppRouter/>
      </MuiThemeProvider>
    </>
  );
};

export default App;
