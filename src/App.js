import React from 'react';
import theme from './themes/default';
import {jss, generateClassName} from './bootstrap';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import JssProvider from 'react-jss/lib/JssProvider';
import AppRouter from './routes/router';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <JssProvider jss={jss()} generateClassName={generateClassName}>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  </JssProvider>
);

export default App;
