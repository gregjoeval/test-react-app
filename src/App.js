import React from 'react';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import AppRouter from './routes/router';
import theme from './theme';
import {MuiThemeProvider} from '@material-ui/core/styles';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter/>
    </MuiThemeProvider>
  );
};

export default App;
